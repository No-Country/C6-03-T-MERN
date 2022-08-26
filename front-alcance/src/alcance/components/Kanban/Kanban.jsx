import { useState, useEffect, useRef } from 'react'
import * as s from './Kanban.styles.js'

export const Kanban = () => {
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [kanbanMessages, setKanbanMessages] = useState([])
  
  return (
    <>
      {isExpanded === false && (
        <s.ChatCircle onClick={() => setIsExpanded(true)}>          
          Kanban
        </s.ChatCircle>
      )}
      {isExpanded && (
        <>
          <s.ChatBox right="725px" bottom="0px" width="350px" shadow="true">
            <s.ChatBoxHeader>
              Nueva Tarea / Editar Tarea             
              <s.ChatBoxToggle onClick={() => setIsExpanded(false)}>
                X
              </s.ChatBoxToggle>
            </s.ChatBoxHeader>
            <s.ChatBoxBody>
              <s.ChatLogs>
                {kanbanMessages.map((m, index) => {
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
              <form>                
                  <input
                    type="text"
                    placeholder=" Escribe aqui..."                                        
                  />
                <button type="submit">Enviar</button>                
                <button type="button">
                    Join
                </button>                
                <button type="button">
                    Salir
                  </button>                
              </form>
            </s.ChatFormContainer>
          </s.ChatBox>          
            <s.ChatBox right="580px" bottom="0px" width="140px" shadow="yes">
              <s.ChatBoxHeader>Pendiente</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
                <s.UserListContainer>
                  <s.UserList>
          
                  </s.UserList>
                </s.UserListContainer>
              </s.ChatBoxBody>
            </s.ChatBox>  
            <s.ChatBox right="435px" bottom="0px" width="140px" shadow="yes">
              <s.ChatBoxHeader>En Proceso</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
                <s.UserListContainer>
                  <s.UserList>
          
                  </s.UserList>
                </s.UserListContainer>
              </s.ChatBoxBody>
            </s.ChatBox>        
            <s.ChatBox right="290px" bottom="0px" width="140px" shadow="yes">
              <s.ChatBoxHeader>Finalizado</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
                <s.UserListContainer>
                  <s.UserList>
          
                  </s.UserList>
                </s.UserListContainer>
              </s.ChatBoxBody>
            </s.ChatBox>    
        </>
      )}
    </>
  )
}
