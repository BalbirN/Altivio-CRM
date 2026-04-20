import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  ChevronRight, 
  Loader2,
  Trash2,
  MessageCircle,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

// Context for AI (simplified for demo)
const CRM_CONTEXT = `
You are Altivio AI, a high-performance sales assistant for the Altivio CRM platform. 
Platform Vision: modern, AI-first, enterprise-grade.
Current User: Alex Rivera (Sales Manager)
Workspace Insights:
- 7 Active High-Value Leads (Continental Tech, Stark Industries, etc.)
- Pipeline Value: $1.2M
- Top Deal: Infrastructure Revamp for Future Dynamics ($120k, 85% probability)
- Critical Task: Contract signing with Vercel at 2:00 PM today.
Your Tone: Professional, ultra-intelligent, proactive, data-driven, slightly encouraging but objective.
Abilities: Summarize leads, predict closure chances, write follow-up emails, recommend next best actions.
`;

export default function AISalesAssistant({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello Alex! I've analyzed your pipeline. You have a high-value contract with Vercel signing today at 2 PM. Would you like me to prepare a briefing or draft a follow-up for Mike Ross?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: CRM_CONTEXT + "\n\nUser Question: " + userMessage }] }
        ],
        config: {
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. How else can I help your sales effort?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having trouble connecting to my neural core. Please try again in a moment." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
          className="fixed bottom-24 right-8 w-96 h-[600px] bg-white rounded-3xl shadow-2xl border border-slate-200 z-[60] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center animate-pulse shadow-lg shadow-primary-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-2">
                  Altivio AI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Intelligence</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
             <button onClick={() => setInput("Score my leads")} className="flex-shrink-0 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:border-primary-500 hover:text-primary-600 transition-all">Score Leads</button>
             <button onClick={() => setInput("Draft follow-up email")} className="flex-shrink-0 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:border-primary-500 hover:text-primary-600 transition-all">Draft Email</button>
             <button onClick={() => setInput("Pipeline forecast")} className="flex-shrink-0 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:border-primary-500 hover:text-primary-600 transition-all">Forecast</button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex flex-col",
                m.role === 'user' ? "items-end" : "items-start"
              )}>
                <div className={cn(
                  "max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed",
                  m.role === 'user' 
                    ? "bg-primary-600 text-white rounded-br-none" 
                    : "bg-slate-100 text-slate-900 rounded-bl-none shadow-sm"
                )}>
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-400 font-bold mt-1.5 px-1 uppercase tracking-wider">
                  {m.role === 'ai' ? 'Altivio AI' : 'You'}
                </span>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin text-primary-500" />
                <span className="text-xs font-medium italic">Assistant is thinking...</span>
              </div>
            )}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex-shrink-0">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about your sales..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-[10px] text-center text-slate-400 font-medium">
              Powered by Altivio Intelligence Engine v4.2
            </p>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
