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
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Header moderno com gradiente */}
      <header className="relative bg-gradient-to-r from-slate-800/95 via-slate-700/95 to-slate-800/95 backdrop-blur-xl shadow-2xl border-b border-slate-600/50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <UserStats 
                user={user} 
                messageCount={messages.filter(m => m.type === 'user').length}
              />
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
                  GLM-4.5 Chat
                </h1>
                <p className="text-slate-300 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  Olá, {user.username}! 👋
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button
                  onClick={clearMessages}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-red-500/90 to-red-600/90 hover:from-red-500 hover:to-red-600 text-white rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed border border-red-400/30 hover:border-red-300/50 backdrop-blur-sm hover:scale-105"
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
                className="group relative px-5 py-2.5 bg-gradient-to-r from-slate-600/90 to-slate-700/90 hover:from-slate-500 hover:to-slate-600 text-white rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-slate-500/30 hover:shadow-2xl border border-slate-500/30 hover:border-slate-400/50 backdrop-blur-sm hover:scale-105"
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
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-5xl mx-auto px-6 py-6">
            {messages.length === 0 && (
              <WelcomeScreen 
                userName={user.username} 
                onStartChat={sendMessage}
              />
            )}
            
            <div className="space-y-4">
              {messages.map(message => (
                <ChatMessage 
                  key={message.id} 
                  message={message} 
                  userName={user.username}
                />
              ))}
            </div>
            
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
