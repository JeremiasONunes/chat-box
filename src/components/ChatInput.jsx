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
    <div className="relative bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-800/95 backdrop-blur-xl border-t border-slate-600/50 p-6 shadow-2xl">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-blue-500/5 pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto relative">
        <div className="flex gap-4 items-end">
          <div className="flex-1 relative group">
            {/* Input glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            
            <input
              type="text"
              className="relative w-full bg-gradient-to-r from-slate-700/90 to-slate-800/90 backdrop-blur-sm border-2 border-slate-600/50 text-white rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300 placeholder-slate-400 text-base font-medium shadow-xl hover:shadow-2xl focus:shadow-blue-500/10"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            
            <button
              type="submit"
              className={`group absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-2xl border backdrop-blur-sm ${
                input.trim() && !isLoading
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white border-blue-400/30 hover:border-blue-300/50 hover:scale-110 shadow-blue-500/30'
                  : 'bg-slate-600/50 text-slate-400 border-slate-500/30'
              }`}
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {input.trim() ? '✨' : '➤'}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Typing indicator */}
        {input.trim() && (
          <div className="absolute -top-8 left-6 text-xs text-slate-400 animate-fade-in">
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></span>
              Pressione Enter para enviar
            </span>
          </div>
        )}
      </form>
    </div>
  );
}