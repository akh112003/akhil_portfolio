const fs = require('fs');
const https = require('https');
const readline = require('readline');

const CSV_URL = 'https://raw.githubusercontent.com/itachi9604/healthcare-chatbot/master/Data/Training.csv';
const OUTPUT_FILE = './src/data/disease_symptoms.json';

// Ensure the directory exists
fs.mkdirSync('./src/data', { recursive: true });

https.get(CSV_URL, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        if (lines.length < 2) return;

        const headers = lines[0].split(',').map(h => h.trim());
        const symptomNames = headers.slice(0, -1);
        
        const diseaseMap = {};

        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].split(',').map(v => v.trim());
            if (row.length !== headers.length) continue;

            const disease = row[row.length - 1];
            if (!diseaseMap[disease]) {
                diseaseMap[disease] = new Set();
            }

            for (let j = 0; j < symptomNames.length; j++) {
                if (row[j] === '1') {
                    // Clean up symptom name slightly
                    const cleanedSymptom = symptomNames[j].replace(/_/g, ' ').trim();
                    diseaseMap[disease].add(cleanedSymptom);
                }
            }
        }

        // Convert Sets to Arrays
        const finalMap = {};
        for (const [disease, symptoms] of Object.entries(diseaseMap)) {
            finalMap[disease] = Array.from(symptoms);
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalMap, null, 2));
        console.log(`Successfully processed data into ${OUTPUT_FILE}`);
        console.log(`Found ${Object.keys(finalMap).length} diseases and ${symptomNames.length} symptoms.`);
    });
}).on('error', (err) => {
    console.error('Error fetching data:', err.message);
});
