import { useState, useEffect } from 'react';
import { getCurrentUser, setCurrentUser, logout, findUser, saveUser, userExists } from '../utils/auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    const foundUser = findUser(username, password);
    if (!foundUser) {
      throw new Error('Usuário ou senha incorretos');
    }
    
    setCurrentUser(foundUser);
    setUser(foundUser);
    return foundUser;
  };

  const register = async (userData) => {
    if (userExists(userData.username, userData.email)) {
      throw new Error('Usuário ou email já existe');
    }
    
    const newUser = saveUser(userData);
    setCurrentUser(newUser);
    setUser(newUser);
    return newUser;
  };

  const logoutUser = () => {
    logout();
    setUser(null);
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout: logoutUser
  };
}