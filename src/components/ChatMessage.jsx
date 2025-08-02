export default function ChatMessage({ message, userName }) {
  const { type, content, timestamp } = message;
  
  const isUser = type === 'user';
  const isError = type === 'error';

  if (isError) {
    return (
      <div className="flex justify-center mb-6">
        <div className="bg-red-900/20 border-2 border-red-500 text-red-300 px-6 py-4 rounded-xl max-w-md backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">⚠️</span>
            <p className="font-medium">{content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-lg ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md flex-shrink-0 ${
          isUser 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
            : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
        }`}>
          {isUser ? (userName ? userName[0].toUpperCase() : '👤') : '🤖'}
        </div>
        
        {/* Bolha de mensagem */}
        <div className={`px-4 py-2 rounded-xl shadow-lg ${
          isUser 
            ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-md' 
            : 'bg-slate-700 text-slate-100 border border-slate-600 rounded-bl-md'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
          {timestamp && (
            <p className={`text-xs mt-1 ${
              isUser ? 'text-blue-200' : 'text-slate-400'
            }`}>
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