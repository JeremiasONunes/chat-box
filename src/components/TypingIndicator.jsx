export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-6 animate-fade-in">
      <div className="flex items-end gap-3 group">
        {/* Avatar da IA */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0 animate-pulse shadow-emerald-500/30">
          🤖
        </div>
        
        {/* Bolha de digitação */}
        <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 border border-slate-600/50 px-6 py-4 rounded-2xl rounded-bl-lg shadow-xl backdrop-blur-sm shadow-slate-500/20">
          <div className="flex items-center gap-3">
            <span className="text-slate-300 text-sm font-medium">IA está digitando</span>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-bounce shadow-sm" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-bounce shadow-sm" style={{animationDelay: '150ms'}}></div>
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full animate-bounce shadow-sm" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}