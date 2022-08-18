import { useState, useEffect } from 'react'
import * as s from './Chat.styles.js'
import io from 'socket.io-client'
import { joinRoom, leftRoom, sendNewMessage } from './conexion.js'

const endPoint = 'http://localhost:3000'
var socket = io(endPoint)

export const Chat = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [user, setUser] = useState('Pepe' + Math.floor(Math.random() * 100))
  const [usersList, setUsersList] = useState([])
  const [isJoined, setIsJoined] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    console.log('useEffect')
    socket.on('receive_message', (data) => {
      setChatMessages((oldChatMessages) => [
        ...oldChatMessages,
        { author: data.author, message: data.message }
      ])
    })

    socket.on('have_joined_room', (data) => {
      setChatMessages((oldChatMessages) => [
        ...oldChatMessages,
        { author: data.author, message: data.message }
      ])
    })

    socket.on('have_left_room', (data) => {
      setChatMessages((oldChatMessages) => [
        ...oldChatMessages,
        { author: data.author, message: data.message }
      ])
    })

    socket.io.on('error', (error) => {
      console.log('error: ' + error)
      setIsJoined(false)
    })

    socket.on('update_users_list', (data) => {
      console.log('updating list')
      setUsersList(data)
    })
  }, [socket])

  const handleChange = (e) => {
    setNewMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendNewMessage(socket, user, newMessage)
    setChatMessages((oldChatMessages) => [
      ...oldChatMessages,
      { author: user, message: newMessage }
    ])
    setNewMessage('')
  }

  const handleJoinRoom = async () => {
    if (socket.connected == false) socket = io(endPoint)
    joinRoom(socket, user)
    setIsJoined(true)
  }

  const handleLeftRoom = async () => {
    leftRoom(socket, user)
    setIsJoined(false)
    setChatMessages([])
    setUsersList([])
  }

  return (
    <>
      {isExpanded === false && (
        <s.ChatCircle onClick={() => setIsExpanded(true)}>
          <s.ChatOverlay> Test </s.ChatOverlay>
          Chat
        </s.ChatCircle>
      )}
      {isExpanded && (
        <>
          <s.ChatBox right="25px" bottom="70px" width="350px" shadow="true">
            <s.ChatBoxHeader>
              Chat Grupal
              <input
                style={{ marginLeft: '10px', maxWidth: '7rem' }}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <s.ChatBoxToggle onClick={() => setIsExpanded(false)}>
                X
              </s.ChatBoxToggle>
            </s.ChatBoxHeader>
            <s.ChatBoxBody>
              <s.ChatLogs>
                {chatMessages.map((m, index) => {
                  return (
                    <s.ChatLog
                      key={index + 100}
                      author={m.author === user ? 'You' : 'NotYou'}
                    >
                      <s.ChatMessageAuthor>{m.author}:</s.ChatMessageAuthor>
                      <s.ChatMessageText>{m.message}</s.ChatMessageText>
                    </s.ChatLog>
                  )
                })}
              </s.ChatLogs>
            </s.ChatBoxBody>
            <s.ChatFormContainer>
              <form onSubmit={handleSubmit}>
                {isJoined && (
                  <input
                    type="text"
                    placeholder=" Escribe aqui..."
                    onChange={handleChange}
                    value={newMessage}
                  />
                )}
                {isJoined && <button type="submit">Enviar</button>}
                {!isJoined && (
                  <button type="button" onClick={handleJoinRoom}>
                    Join
                  </button>
                )}
                {isJoined && (
                  <button type="button" onClick={handleLeftRoom}>
                    Salir
                  </button>
                )}
              </form>
            </s.ChatFormContainer>
          </s.ChatBox>
          {isJoined && (
            <s.ChatBox right="380px" bottom="70px" width="140px" shadow="yes">
              <s.ChatBoxHeader>Usuarios</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
                <s.UserListContainer>
                  <s.UserList>
                    {
                      <ul>
                        {usersList.map((item, index) => (
                          <li key={index + 100}> 👨‍💼 {item.user} </li>
                        ))}
                      </ul>
                    }
                  </s.UserList>
                </s.UserListContainer>
              </s.ChatBoxBody>
            </s.ChatBox>
          )}
        </>
      )}
    </>
  )
}