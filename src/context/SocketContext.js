import { createContext, useContext } from 'react';

import { io } from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const client = io('http://localhost:3030');

  const sendMessage = () => {
    client.emit('message', 'Супер компонент шлет сообщение');
  };

  const joinChat = () => {
    client.emit('join', { id: 'Супер_пользователь' });
  };

  const actions = {
    sendMessage,
    joinChat,
  };

  return (
    <SocketContext.Provider value={[client, actions]}>
      {children}
    </SocketContext.Provider>
  );
};
