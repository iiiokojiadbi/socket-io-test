import { useEffect } from 'react';
import { useSocket } from '../context/SocketContext';

const BestComponent = () => {
  const [socket] = useSocket();

  useEffect(() => {
    console.log('Лучший компонент смонтирован');

    socket.on('best', (msg) => {
      console.log('Лучшее сообщение: ', msg);
    });

    socket.on('super', (msg) => {
      console.log('Супер сообщение в лучшем компоненте: ', msg);
    });
  }, [socket]);

  return (
    <div>
      <header>Это лучший компонент</header>
    </div>
  );
};

export default BestComponent;
