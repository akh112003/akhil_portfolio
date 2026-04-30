"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Activity, Stethoscope, AlertTriangle, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "Hello! I am Aura, your personal healthcare AI assistant. How can I help you today? Please feel free to describe any symptoms you are experiencing or ask health-related questions."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || "Failed to fetch");

      setMessages((prev) => [...prev, { id: Date.now().toString(), role: data.role, content: data.content }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "system", content: "Sorry, I encountered an error connecting to my core systems. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-teal-500/30">
      {/* Header */}
      <header className="flex-none p-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl shadow-lg shadow-teal-500/20">
              <Stethoscope className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">
                Aura Mini Doctor
              </h1>
              <p className="text-xs text-slate-400 font-medium tracking-wide">Intelligent Health Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-xs text-amber-400/80 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
            <AlertTriangle className="w-4 h-4" />
            <span className="hidden sm:inline">AI Tool - Not a substitute for professional medical advice.</span>
            <span className="sm:hidden">AI Tool - Not medical advice.</span>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {msg.role === "assistant" ? (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Stethoscope className="w-5 h-5 text-slate-900" />
                    </div>
                  ) : msg.role === "user" ? (
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center border border-slate-600 shadow-lg">
                      <User className="w-5 h-5 text-slate-300" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-500/30">
                      <AlertTriangle className="w-5 h-5 text-rose-400" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 shadow-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-slate-800 border border-slate-700 text-slate-100 rounded-tr-sm"
                      : msg.role === "assistant"
                      ? "bg-slate-800/60 border border-teal-500/20 text-slate-200 rounded-tl-sm prose-p:my-2 prose-ul:my-2 prose-li:my-0.5"
                      : "bg-rose-500/10 border border-rose-500/20 text-rose-200 rounded-tl-sm text-sm"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-invert prose-teal max-w-none prose-sm sm:prose-base">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Loading Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg opacity-70">
                <Stethoscope className="w-5 h-5 text-slate-900" />
              </div>
              <div className="bg-slate-800/60 border border-teal-500/20 rounded-2xl rounded-tl-sm p-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-400 animate-pulse" />
                <span className="text-sm text-teal-400/80 font-medium">Aura is analyzing...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} className="h-px" />
        </div>
      </main>

      {/* Input Area */}
      <footer className="flex-none p-4 border-t border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-3 bg-slate-800 border border-slate-700 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-teal-500/50 focus-within:border-teal-500/50 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Describe your symptoms or ask a medical question..."
              className="flex-1 max-h-32 min-h-[44px] bg-transparent border-none resize-none focus:ring-0 text-slate-200 placeholder:text-slate-500 p-2 sm:p-3 custom-scrollbar"
              rows={1}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 mb-0.5 sm:mb-1 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-900 hover:from-teal-400 hover:to-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[10px] text-slate-500">
              Aura is powered by AI and a specialized medical dataset. It can make mistakes. Always consult a certified physician.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
