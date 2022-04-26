const express = require('express');
const app = express();

const { Server } = require('socket.io');

const PORT = 3030;

const server = app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

const io = new Server(server, { cors: { origin: '*' } });

const superMessages = [
  { type: 'SHOW', msg: 'Показать что-то' },
  { type: 'HIDE', msg: 'Спрятать что-то' },
  { type: 'BING', msg: 'Зазвучать что-то' },
  { type: 'BONG', msg: 'Не зазвучать что-то' },
];

const bestMessages = [
  { type: 'TRA-TA-TA', msg: 'Что это значит' },
  { type: 'OLO-LO-LO', msg: 'Это что-то значит' },
  { type: 'AGA-GA-GA', msg: 'Что-то да значит' },
  { type: 'PEW-PE-WE', msg: 'Значит это что-то' },
];

const getRandom = () => Math.floor(Math.random() * 4);

io.on('connection', (socket) => {
  console.log('Супер клиент подключился по сокету');

  socket.on('join', (data) => {
    console.log(`Супер клиент вошел в чат с id ${data.id}`);

    socket.join(data.id);
  });

  socket.on('message', (msg) => {
    console.log('Это сообщение супер клиента: ', msg);

    const user = io.sockets.in('Супер_пользователь');

    user.emit('super', superMessages[getRandom()]);
    user.emit('best', bestMessages[getRandom()]);
  });
});
