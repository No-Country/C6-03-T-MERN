import { useState, useEffect, useRef } from 'react'
import * as s from './Chat.styles.js'
import io from 'socket.io-client'
import { joinRoom, leftRoom, sendNewMessage } from './conexion.js'
import { useSelector } from 'react-redux'
import { useResize, useChatStore } from '../../../hooks'

const endPoint = import.meta.env.VITE_URI_CHAT_SERVER
console.log(endPoint)
var socket = io(endPoint, { reconnection: false })

export const Chat = () => {
  const { isPhone } = useResize(550)
  const { usersList, setUsersList } = useChatStore()
  const {
    status,
    user: username,
    errorMessage
  } = useSelector((state) => state.auth)
  console.log('user: ' + username.name)
  console.log('Render Chat Component')
  const [isExpanded, setIsExpanded] = useState(false)
  const [user, setUser] = useState(
    username.name + Math.floor(Math.random() * 1000)
  )
  // const [usersList, setUsersList] = useState([])
  const [isJoined, setIsJoined] = useState(false)
  const [newMessage, setNewMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])

  const bottomRef = useRef(null)

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChatMessages((oldChatMessages) => [
        ...oldChatMessages,
        { author: data.author, message: data.message }
      ])
    })

    socket.on('have_joined_room', (data) => {
      console.log('User se unio al chat')
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
      // setUsersList(data) // Store locally
      setUsersList(data) // Store User List in Redux
    })
  }, [socket])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newMessage.trim() !== '') {
      sendNewMessage(socket, user, newMessage)
      setChatMessages((oldChatMessages) => [
        ...oldChatMessages,
        { author: user, message: newMessage.trim() }
      ])
      setNewMessage('')
    }
  }

  const handleJoinRoom = async () => {
    if (socket.connected == false)
      socket = io(endPoint, { reconnection: false })
    joinRoom(socket, user)
    setIsJoined(true)
  }

  const handleLeftRoom = async () => {
    leftRoom(socket, user)
    setIsJoined(false)
    setChatMessages([])
    // setUsersList([])
    setUsersList([])
  }

  return (
    <>
      {isExpanded === false && (
        <s.ChatCircle onClick={() => setIsExpanded(true)}>Chat</s.ChatCircle>
      )}
      {isExpanded && (
        <>
          <s.ChatBox right="25px" bottom="30px" width="350px" shadow="true">
            <s.ChatBoxHeader>
              Chat Grupal
              <input
                style={{ marginLeft: '10px', maxWidth: '7rem' }}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                readOnly={true}
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
                <div ref={bottomRef} />
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
          {isJoined && !isPhone && (
            <s.ChatBox right="380px" bottom="30px" width="160px" shadow="yes">
              <s.ChatBoxHeader>Usuarios</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
                <s.UserListContainer>
                  <s.UserList>
                    {
                      <ul>
                        {usersList.map((item, index) => (
                          <li key={item.id}> 👨‍💼 {item.user} </li>
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
