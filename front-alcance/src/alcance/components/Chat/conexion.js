import io from 'socket.io-client'
const endPoint = 'http://localhost:3000'
const ROOM = 100;

export const joinRoom = (socket, user) => {    
    if (user !== '') {
      const m = {
        room: ROOM,
        author: user,
        message: 'joined room',
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes()
      }
      socket.emit('join_room', m)      
    }
  }

  export const leftRoom = (socket, user) => {
    const m = {
      room: ROOM,
      author: user,
      message: 'left room',
      time:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes()
    }    
    socket.close()
  }

  export const sendNewMessage = async (socket, user, newMessage) => {
    const m = {
      room: 100,
      author: user,
      message: newMessage,
      time:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes()
    }
    await socket.emit('send_message', m)  
  }