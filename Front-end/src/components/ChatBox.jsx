import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Send, Bot, User as UserIcon } from 'lucide-react';
import Button from './ui/Button';

export default function ChatBox({ questionText, compact = false, onAssistantResponse }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m here to help you understand this question. Feel free to ask me anything about it!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const latestAssistant = [...messages].slice().reverse().find((m) => m.role === 'assistant');
  const latestUser = [...messages].slice().reverse().find((m) => m.role === 'user');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    const scrollToBottomWithGap = (gap = 120) => {
      try {
        // Scroll the messages container into view, then adjust for a small gap
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        // Also scroll the window a little up so the last message sits above the fixed input
        if (typeof window !== 'undefined' && gap) {
          window.scrollBy({ top: -gap, left: 0, behavior: 'smooth' });
        }
      } catch (e) {
        // ignore
      }
    };

    // ensure UI updates before scrolling
    setTimeout(() => scrollToBottomWithGap(120), 60);

    setTimeout(() => {
      const responses = [
        'That\'s a great question! Let me break it down for you...',
        'Based on the question, the key concept here is...',
        'Think about it this way: the correct approach would be...',
        'Let me explain the logic behind this...',
        'Here\'s a hint: consider the time complexity...',
      ];
      const aiMessage = {
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
      };
      setMessages((prev) => {
        const next = [...prev, aiMessage];
        // after adding assistant reply, scroll so reply is visible with gap
        setTimeout(() => scrollToBottomWithGap(140), 80);
        return next;
      });
      if (typeof onAssistantResponse === 'function') {
        try {
          onAssistantResponse(aiMessage.content);
        } catch (e) {
          // ignore errors from parent
        }
      }
      setIsTyping(false);
    }, 1000);
  };

  if (compact) {
    // Compact chat-mode: show recent conversation like a chat app
    const recent = messages.slice(-8);
    // compute a dynamic max height so compact box grows with more messages but remains capped
    const compactMaxHeight = Math.min(48 + messages.length * 56, Math.round(window?.innerHeight * 0.6) || 420);
    return (
      <div className="glass-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        <div className="p-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">AI Assistant</div>
              <div className="text-xs text-gray-400">Ask about this question</div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-black/10 overflow-y-auto space-y-3 pb-24 lg:pb-0" style={{ maxHeight: `${compactMaxHeight}px` }}>
          {recent.map((message, idx) => (
            <div key={idx} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.role === 'assistant' ? (
                <div className="max-w-[85%] p-2 rounded-lg glass-card-light border border-white/10 text-sm text-gray-200">
                  {message.content}
                </div>
              ) : (
                <div className="max-w-[85%] p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm">
                  {message.content}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[85%] p-2 rounded-lg glass-card-light border border-white/10 text-sm text-gray-200">AI is typing...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Desktop/large-screen input (in-panel) */}
        <div className="p-3 border-t border-white/10 hidden lg:block">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask any question about this question"
              className="flex-1 px-3 py-2 glass-card-light border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 text-sm transition-all duration-300"
            />
            <button
              onClick={handleSend}
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 text-sm"
              disabled={!input.trim()}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">AI can make a mistake — check important info</p>
        </div>

        {/* Mobile fixed input rendered into document.body so it's fixed to viewport bottom */}
        {typeof document !== 'undefined' && createPortal(
          <div className="p-3 border-t border-white/10 fixed left-4 right-4 bottom-4 z-50 lg:hidden">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask any question about this question"
                className="flex-1 px-3 py-2 glass-card-light border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 text-sm transition-all duration-300"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 text-sm"
                disabled={!input.trim()}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">AI can make a mistake — check important info</p>
          </div>,
          document.body
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full glass-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-white/10 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg neon-glow-blue">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">AI Assistant</h3>
            <p className="text-xs text-gray-400">Ask me anything about this question</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 animate-fade-in ${
              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                message.role === 'user'
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-600'
                  : 'bg-gradient-to-br from-purple-600 to-pink-600'
              }`}
            >
              {message.role === 'user' ? (
                <UserIcon className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Message bubble */}
            <div
              className={`max-w-[80%] p-3 rounded-2xl transition-all duration-200 ${
                message.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'glass-card-light text-gray-200 border border-white/10'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="glass-card-light p-3 rounded-2xl border border-white/10">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10 glass-card-light">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className="flex-1 px-4 py-3 glass-card-light border border-zinc-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all duration-300"
          />
          <button
            onClick={handleSend}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
            disabled={!input.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}