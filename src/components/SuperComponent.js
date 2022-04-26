import { useEffect } from 'react';
import { useSocket } from '../context/SocketContext';

const SuperComponent = () => {
  const [socket, actions] = useSocket();

  useEffect(() => {
    console.log('Супер компонент смонтирован');

    socket.on('super', (msg) => {
      console.log('Супер сообщение: ', msg);
    });
  }, [socket]);

  return (
    <div>
      <header>Это супер компонент</header>
      <button onClick={() => actions.sendMessage()}>Супер отправка</button>
      <button onClick={() => actions.joinChat()}>Супер вход</button>
    </div>
  );
};

export default SuperComponent;
