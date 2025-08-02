export default function WelcomeScreen({ userName, onStartChat }) {
  const suggestions = [
    "Vamos conversar sobre filosofia e o sentido da vida?",
    "Me conte sobre um tema que você acha fascinante",
    "Como a tecnologia está mudando a sociedade?",
    "Qual sua opinião sobre criatividade e inovação?"
  ];

  return (
    <div className="text-center py-8">
      <div className="mb-8">
        <div className="text-5xl mb-3">🤖</div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Olá, {userName}!
        </h2>
        <p className="text-slate-300">
          Como posso ajudá-lo hoje?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-6">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onStartChat(suggestion)}
            className="group relative p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl border border-slate-600 hover:border-blue-400 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 text-left shadow-lg hover:shadow-blue-500/10 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-400 group-hover:to-blue-500 group-hover:scale-110 transition-all duration-300 shadow-md">
                <span className="text-white text-sm">💡</span>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">{suggestion}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-700/50 rounded-lg max-w-xl mx-auto border border-slate-600">
        <h3 className="font-semibold text-white mb-2 text-sm">💡 Dicas:</h3>
        <ul className="text-slate-300 text-xs space-y-1 text-left">
          <li>• Seja específico em suas perguntas</li>
          <li>• Use linguagem natural e clara</li>
          <li>• Peça exemplos quando necessário</li>
        </ul>
      </div>
    </div>
  );
}