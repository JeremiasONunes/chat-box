export default function WelcomeScreen({ userName, onStartChat }) {
  const suggestions = [
    "Vamos conversar sobre filosofia e o sentido da vida?",
    "Me conte sobre um tema que você acha fascinante",
    "Como a tecnologia está mudando a sociedade?",
    "Qual sua opinião sobre criatividade e inovação?"
  ];

  return (
    <div className="text-center py-12 animate-fade-in">
      <div className="mb-12">
        <div className="relative inline-block mb-6">
          <div className="text-7xl animate-bounce">🤖</div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent mb-4">
          Olá, {userName}!
        </h2>
        <p className="text-slate-300 text-lg font-medium">
          Como posso ajudá-lo hoje? ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onStartChat(suggestion)}
            className="group relative p-6 bg-gradient-to-br from-slate-700/80 via-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-400/60 hover:from-slate-600/80 hover:to-slate-700/80 transition-all duration-500 text-left shadow-xl hover:shadow-blue-500/20 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-blue-500/30">
                <span className="text-white text-lg">💡</span>
              </div>
              <p className="text-slate-200 text-base leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">{suggestion}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        ))}
      </div>

      <div className="relative p-6 bg-gradient-to-br from-slate-700/60 via-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-2xl max-w-2xl mx-auto border border-slate-600/50 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-2xl"></div>
        <h3 className="font-bold text-white mb-4 text-lg flex items-center justify-center gap-2">
          💡 <span>Dicas para uma melhor conversa</span>
        </h3>
        <ul className="text-slate-300 text-sm space-y-2 text-left max-w-lg mx-auto">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full flex-shrink-0"></span>
            Seja específico em suas perguntas
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full flex-shrink-0"></span>
            Use linguagem natural e clara
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full flex-shrink-0"></span>
            Peça exemplos quando necessário
          </li>
        </ul>
      </div>
    </div>
  );
}