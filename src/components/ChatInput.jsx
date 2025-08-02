import { useState } from 'react';

export default function ChatInput({ onSendMessage, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    onSendMessage(input.trim());
    setInput('');
  };

  return (
    <div className="bg-slate-800 border-t border-slate-600 p-4">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full bg-slate-700 border-2 border-slate-600 text-white rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-400"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="group absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:shadow-xl hover:scale-105 border border-blue-400/20"
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">➤</span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}