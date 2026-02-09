"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm here to help you learn about this AI chatbot platform. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");

    // Add user message immediately
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // Add AI response immediately
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't process that. Please try again.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-6 md:p-4 border-b border-white/10 bg-[#0a0a0e]/80 backdrop-blur-sm">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-linear-to-br bg-slate-700/20 flex items-center justify-center overflow-hidden">
          <Image
            src="/ai-icon-img.jpg"
            alt="AI Assistant"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-white text-sm md:text-base font-semibold">
            AI Assistant
          </h3>
          <p className="text-zinc-400 text-xs">Always here to help</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 md:gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-7 h-7 md:w-8 md:h-8 rounded-full shrink-0 flex items-center justify-center text-xs md:text-sm overflow-hidden ${
                msg.role === "user"
                  ? "bg-indigo-600"
                  : "bg-linear-to-br bg-neutral-700"
              }`}
            >
              {msg.role === "user" ? (
                <Image
                  src="/hero-peope-icon.jpg"
                  alt="User"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src="/ai-icon-img.jpg"
                  alt="AI"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div
              className={`max-w-[75%] md:max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-tr-none"
                  : "bg-white/5 text-white rounded-tl-none border border-white/10"
              }`}
            >
              <p className="leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-linear-to-br bg-neutral-700 flex items-center justify-center text-xs md:text-sm overflow-hidden">
              <Image
                src="/ai-icon-img.jpg"
                alt="AI"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white/5 rounded-2xl rounded-tl-none px-4 py-3 border border-white/10">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 md:p-4 border-t border-white/10 bg-[#0a0a0e]/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 bg-white/5 rounded-full border border-white/10 px-3 md:px-4 py-2 focus-within:border-indigo-500/50 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Write a message..."
            className="flex-1 bg-transparent text-white text-sm md:text-base placeholder:text-zinc-500 outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-white/10 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
