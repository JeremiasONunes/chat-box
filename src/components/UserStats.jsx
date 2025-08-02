import { useState } from 'react';

export default function UserStats({ user, messageCount }) {
  const [showStats, setShowStats] = useState(false);

  const joinDate = new Date(user.createdAt).toLocaleDateString('pt-BR');
  const daysSinceJoin = Math.floor((new Date() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24));

  return (
    <div className="relative">
      <button
        onClick={() => setShowStats(!showStats)}
        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        title="Estatísticas do usuário"
      >
        <span className="text-white font-bold text-lg">{user.username[0].toUpperCase()}</span>
      </button>

      {showStats && (
        <div className="absolute top-14 left-0 bg-slate-700 rounded-xl shadow-2xl border border-slate-600 p-6 min-w-72 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">{user.username[0].toUpperCase()}</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">{user.username}</h3>
              <p className="text-slate-300">{user.email}</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-600 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Membro desde:</span>
              <span className="text-white font-semibold">{joinDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Dias ativo:</span>
              <span className="text-white font-semibold">{daysSinceJoin} dias</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Mensagens enviadas:</span>
              <span className="text-blue-400 font-bold">{messageCount}</span>
            </div>
          </div>

          <button
            onClick={() => setShowStats(false)}
            className="mt-4 w-full py-2 bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-white rounded-lg transition-all duration-200 text-sm font-medium border border-slate-500/30 hover:border-slate-400/50 shadow-md hover:shadow-lg"
          >
            Fechar
          </button>
        </div>
      )}
    </div>
  );
}