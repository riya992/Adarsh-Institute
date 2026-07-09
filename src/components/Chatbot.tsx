import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Cpu, Trash2, Check, MessageCircle, HelpCircle, ArrowUpRight, ShieldAlert } from "lucide-react";
import { ChatMessage } from "../types";
import { CONTACT_INFO } from "../data";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Hello! Welcome to Adarsh Institute's Computer Legacy portal. I am Adarsh AI, your digital assistant.\n\nI can help you check course details, batch timings, eligibility criteria, fees, and scholarship offers. Ask me anything!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // Suggested quick-question chips
  const QUICK_PROMPTS = [
    "DCA Eligibility & Syllabus?",
    "BCA Fees & Duration?",
    "How to take Admission?",
    "Are scholarships available?"
  ];

  useEffect(() => {
    // Scroll chatbot body to bottom on message change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Create user message
    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Map existing messages to history payload for backend conversational memory
      const history = messages
        .filter(m => m.id !== "welcome")
        .slice(-6) // Send last 6 messages as context to save bandwidth
        .map(m => ({
          role: m.role === "user" ? "user" : "assistant",
          text: m.text
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history })
      });

      const data = await response.json();
      
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          role: "assistant",
          text: data.text || "I was unable to retrieve a reply. How else can I assist with your computer legacy?",
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error("Failed to query chatbot api:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          role: "assistant",
          text: "I encountered a transient connection issue. Please make sure the dev server is active and the API key is configured. You can also directly contact our Admissions Counselor via phone or WhatsApp!",
          timestamp: new Date()
        }
      ]);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        text: "Conversation cleared. Ask me any details regarding Adarsh Institute's programmes and admissions!",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      
      {/* Floating Chat Window */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="bg-white dark:bg-slate-900 w-[340px] sm:w-[380px] h-[500px] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden relative mb-2 animate-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="bg-primary-950 px-4 py-3.5 text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="bg-gradient-to-tr from-primary-600 to-accent-500 p-1.5 rounded-lg shadow-inner">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm tracking-tight">Adarsh AI legacy bot</h4>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-blue-300 font-medium tracking-wide">AI Assistant • Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {messages.length > 1 && (
                <button
                  onClick={handleClearHistory}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Clear chat history"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                id="btn-close-chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-950 space-y-4"
            id="chatbot-messages-body"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                {/* Bubble */}
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary-600 text-white rounded-tr-none shadow-md"
                      : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200/80 dark:border-slate-800 rounded-tl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                {/* Time */}
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex flex-col items-start max-w-[85%] mr-auto">
                <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
          </div>

          {/* Prompt suggestions chips */}
          <div className="bg-slate-100 dark:bg-slate-800 p-2 border-t border-slate-200 dark:border-slate-800 overflow-x-auto flex gap-2 shrink-0 scrollbar-none" id="chatbot-chips-container">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] font-medium text-primary-700 dark:text-red-400 bg-white dark:bg-slate-900 hover:bg-primary-50 dark:hover:bg-red-950/25 border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-red-900 px-2.5 py-1 rounded-full shrink-0 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Panel */}
          <div className="bg-white dark:bg-slate-900 p-3 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about DCA, MCA, fees, admissions..."
                className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent transition-all"
                id="chatbot-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2.5 rounded-xl disabled:opacity-40 transition-colors cursor-pointer"
                id="chatbot-send-button"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tray of Buttons */}
      <div className="flex items-center gap-3">
        {/* Instant WhatsApp Link */}
        <a
          href={CONTACT_INFO.whatsappGroup}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-xs font-semibold group"
          title="Join WhatsApp student circle"
          id="btn-whatsapp-group"
        >
          <MessageCircle className="w-5 h-5 fill-white text-green-500 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Join WhatsApp Invite</span>
        </a>

        {/* AI Query Chatbot Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 bg-gradient-to-tr from-primary-600 to-accent-500 text-white p-3.5 rounded-full shadow-xl hover:shadow-primary-600/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer ${
            isOpen ? "bg-slate-800 from-slate-800 to-slate-900 ring-2 ring-white/10" : ""
          }`}
          title="Query AI Assistant"
          id="btn-chatbot-trigger"
        >
          {isOpen ? <X className="w-5 h-5 text-white" /> : <MessageSquare className="w-5 h-5 text-white" />}
        </button>
      </div>

    </div>
  );
}
