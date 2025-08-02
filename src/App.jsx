import { useEffect, useRef, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useChat } from './hooks/useChat';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WelcomeScreen from './components/WelcomeScreen';
import UserStats from './components/UserStats';
import ChatMessage from './components/ChatMessage';
import TypingIndicator from './components/TypingIndicator';
import ChatInput from './components/ChatInput';
import './index.css';

function App() {
  const { user, isLoading: authLoading, isAuthenticated, login, register, logout } = useAuth();
  const { messages, isLoading: chatLoading, sendMessage, clearMessages } = useChat();
  const [showRegister, setShowRegister] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, chatLoading]);

  if (authLoading) {
    return (
      <div className="h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg font-medium">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return showRegister ? (
      <RegisterForm 
        onRegister={register}
        onSwitchToLogin={() => setShowRegister(false)}
      />
    ) : (
      <LoginForm 
        onLogin={login}
        onSwitchToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="h-screen bg-slate-900 flex flex-col">
      {/* Header moderno com gradiente */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-700 shadow-xl border-b border-slate-600">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <UserStats 
                user={user} 
                messageCount={messages.filter(m => m.type === 'user').length}
              />
              <div>
                <h1 className="text-2xl font-bold text-white">GLM-4.5 Chat</h1>
                <p className="text-slate-300 text-sm">Olá, {user.username}! 👋</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button
                  onClick={clearMessages}
                  className="group relative px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-red-400/20 hover:border-red-300/30"
                  disabled={chatLoading}
                >
                  <span className="flex items-center gap-2">
                    <span className="group-hover:scale-110 transition-transform duration-200">🗑️</span>
                    Limpar Chat
                  </span>
                </button>
              )}
              <button
                onClick={logout}
                className="group relative px-4 py-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-slate-500/25 hover:shadow-xl border border-slate-500/20 hover:border-slate-400/30"
              >
                <span className="flex items-center gap-2">
                  <span className="group-hover:scale-110 transition-transform duration-200">🚪</span>
                  Sair
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Área principal do chat */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-800">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-6xl mx-auto px-6 py-4">
            {messages.length === 0 && (
              <WelcomeScreen 
                userName={user.username} 
                onStartChat={sendMessage}
              />
            )}
            
            {messages.map(message => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                userName={user.username}
              />
            ))}
            
            {chatLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <ChatInput onSendMessage={sendMessage} isLoading={chatLoading} />
      </main>
    </div>
  );
}

export default App;
