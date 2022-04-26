import { useEffect } from 'react';
import { useSocket } from '../context/SocketContext';

const BestComponent = () => {
  const [socket] = useSocket();

  useEffect(() => {
    console.log('Лучший компонент смонтирован');

    socket.on('best', (msg) => {
      console.log(msg);
    });
  }, [socket]);

  return (
    <div>
      <header>Это лучший компонент</header>
    </div>
  );
};

export default BestComponent;
