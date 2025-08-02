export default function TypingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-end gap-2">
        {/* Avatar da IA */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0">
          🤖
        </div>
        
        {/* Bolha de digitação */}
        <div className="bg-slate-700 border border-slate-600 px-4 py-2 rounded-xl rounded-bl-md shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-sm">IA está digitando</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}