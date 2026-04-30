import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { predictDisease } from '@/lib/predictor';
import diseaseSymptoms from '@/data/disease_symptoms.json';

// Initialize the Gemini API client
// We allow this to be undefined initially to handle the error gracefully for the user
const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null;

// The 132 possible symptoms as a comma-separated string for the prompt
const ALL_POSSIBLE_SYMPTOMS = Array.from(new Set(Object.values(diseaseSymptoms).flat())).join(', ');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 });
    }

    // Get the latest user message
    const latestMessage = messages[messages.length - 1].content;

    if (!genAI) {
      // Fallback local matching engine when Gemini is not configured
      const userMessage = latestMessage.toLowerCase();
      // Simple word tokenization to act as rough symptom matching
      const words = userMessage.split(/[^a-z]+/);
      
      const predictions = predictDisease(words);
      let mockResponse = "";
      
      if (predictions.length > 0) {
        mockResponse += "Based on the symptoms you've described, I have analyzed your case. Here are the most likely possibilities:\n\n";
        predictions.slice(0, 3).forEach((p: any, i: number) => {
          mockResponse += `### ${i + 1}. **${p.disease}**\n`;
          mockResponse += `*Symptoms matched: ${p.matchedSymptoms.join(', ')}*\n\n`;
          if (p.precautions && p.precautions.length > 0) {
            mockResponse += "**Recommended Measures:**\n";
            p.precautions.forEach((prec: string) => {
              mockResponse += `- ${prec}\n`;
            });
            mockResponse += "\n";
          }
        });
        mockResponse += "\n> **Note:** I am an AI assistant and this is not a definitive diagnosis. Please consult a healthcare professional for proper medical advice.";
      } else {
         mockResponse += "I couldn't identify specific medical conditions based on those symptoms. Could you please provide more details? For example, are you experiencing a fever, headache, nausea, or any other specific issues?\n\n> **Note:** For accurate diagnosis and if you are feeling unwell, always consult a healthcare professional.";
      }

      // Simulate network delay to make the UI feel like it's analyzing
      await new Promise(resolve => setTimeout(resolve, 1500));

      return NextResponse.json({ 
        role: 'assistant', 
        content: mockResponse
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Step 1: Extract symptoms from the user's message
    const extractionPrompt = `
      You are a medical data extraction assistant.
      User message: "${latestMessage}"
      
      Extract any medical symptoms mentioned by the user. 
      Only return a comma-separated list of symptoms. If no symptoms are found, return exactly "NONE".
      Try to match them conceptually to this list of known symptoms if possible, but keep it brief:
      ${ALL_POSSIBLE_SYMPTOMS}
    `;

    const extractionResult = await model.generateContent(extractionPrompt);
    const extractedText = extractionResult.response.text().trim();
    
    let predictionText = "";
    
    // Step 2: If symptoms found, run prediction
    if (extractedText !== "NONE" && extractedText.length > 0) {
      const userSymptoms = extractedText.split(',').map(s => s.trim());
      const predictions = predictDisease(userSymptoms);
      
      if (predictions.length > 0) {
        // Take top 3 predictions
        const topPredictions = predictions.slice(0, 3);
        predictionText = `\n\n[SYSTEM DIAGNOSTIC CONTEXT - DO NOT SHOW TO USER DIRECTLY, JUST USE TO INFORM YOUR RESPONSE]\nBased on my dataset analysis, the user's symptoms (${userSymptoms.join(', ')}) match the following potential conditions:\n`;
        topPredictions.forEach((p, i) => {
          predictionText += `${i + 1}. ${p.disease} (Matches: ${p.matchedSymptoms.join(', ')})\n`;
        });
        predictionText += `Please consider these possibilities in your response, but remind the user to consult a real doctor for an official diagnosis.`;
      }
    }

    // Step 3: Generate the final conversational response
    const systemPrompt = `
      You are 'Aura', a highly advanced, empathetic, and professional Healthcare Chatbot ("Mini Doctor").
      Your goal is to answer health-related doubts, provide general advice, and evaluate symptoms.
      
      CRITICAL RULES:
      1. Always be empathetic and polite.
      2. If the user provides symptoms, evaluate them logically.
      3. ALWAYS include a clear disclaimer that you are an AI, not a doctor, and they should seek professional medical help for serious or persistent conditions.
      4. Format your response beautifully using markdown (bolding, bullet points, etc.).
      
      ${predictionText}
    `;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "System Instructions: " + systemPrompt }]
        },
        {
          role: "model",
          parts: [{ text: "Understood. I will act as Aura, the empathetic Mini Doctor, and follow all instructions strictly." }]
        },
        // Map past messages to Gemini format
        ...messages.slice(0, -1).map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ]
    });

    const finalResult = await chat.sendMessage([{ text: latestMessage }]);
    const finalResponseText = finalResult.response.text();

    return NextResponse.json({
      role: 'assistant',
      content: finalResponseText
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal server error', details: error.message }, { status: 500 });
  }
}
