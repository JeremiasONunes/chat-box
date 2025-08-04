export default function ChatMessage({ message, userName }) {
  const { type, content, timestamp } = message;
  
  const isUser = type === 'user';
  const isError = type === 'error';

  if (isError) {
    return (
      <div className="flex justify-center mb-8 animate-fade-in">
        <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 border-2 border-red-500/60 text-red-200 px-8 py-5 rounded-2xl max-w-md backdrop-blur-lg shadow-2xl shadow-red-500/20">
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl animate-pulse">⚠️</span>
            <p className="font-medium text-center leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex mb-6 animate-fade-in ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-2xl ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end gap-3 group`}>
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
          isUser 
            ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-blue-500/30' 
            : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-emerald-500/30'
        }`}>
          {isUser ? (userName ? userName[0].toUpperCase() : '👤') : '🤖'}
        </div>
        
        {/* Bolha de mensagem */}
        <div className={`px-5 py-4 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl backdrop-blur-sm ${
          isUser 
            ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-br-lg shadow-blue-500/20 border border-blue-400/20' 
            : 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 text-slate-100 border border-slate-600/50 rounded-bl-lg shadow-slate-500/20'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{content}</p>
          {timestamp && (
            <p className={`text-xs mt-2 flex items-center gap-1 ${
              isUser ? 'text-blue-200/80' : 'text-slate-400/80'
            }`}>
              <span className="w-1 h-1 rounded-full bg-current opacity-60"></span>
              {new Date(timestamp).toLocaleTimeString('pt-BR', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}