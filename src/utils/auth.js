// Simulação de banco de dados local usando localStorage
const USERS_KEY = 'chat_users';
const CURRENT_USER_KEY = 'current_user';

// Inicializar com usuários padrão se não existir
const initializeUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  if (!users) {
    const defaultUsers = [
      { id: 1, username: 'admin', email: 'admin@chat.com', password: '123456', createdAt: new Date().toISOString() }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

export const getUsers = () => {
  initializeUsers();
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
};

export const saveUser = (user) => {
  const users = getUsers();
  const newUser = {
    id: Date.now(),
    ...user,
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return newUser;
};

export const findUser = (username, password) => {
  const users = getUsers();
  return users.find(user => user.username === username && user.password === password);
};

export const userExists = (username, email) => {
  const users = getUsers();
  return users.some(user => user.username === username || user.email === email);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};