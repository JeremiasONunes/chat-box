import { useState } from 'react';
import { enviarParaIA } from '../huggingface';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const createMessage = (type, content) => ({
    id: Date.now() + Math.random(),
    type,
    content,
    timestamp: new Date().toISOString()
  });

  const sendMessage = async (messageText) => {
    if (!messageText?.trim() || isLoading) return;

    const userMessage = createMessage('user', messageText);
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const currentMessages = messages.concat(userMessage);
      const aiResponse = await enviarParaIA(messageText, currentMessages);
      const aiMessage = createMessage('ai', aiResponse);
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = createMessage('error', error.message);
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages
  };
}