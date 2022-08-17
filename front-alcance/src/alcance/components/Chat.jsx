// react 
import {useState} from 'react'
// styles components
import * as s from './Chat.styles.js'
// components
import ChatRelleno from './ChatRelleno.jsx'

export const Chat = () => {

  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
   e.preventDefault();
  }

  return (
    <>
      {isExpanded === false &&
      <s.ChatCircle onClick={ () => setIsExpanded(true)}>
        <s.ChatOverlay> Test </s.ChatOverlay>
        Chat
      </s.ChatCircle>
      }
      {isExpanded && 
      <s.ChatBox>
        <s.ChatBoxHeader>
          Chat Grupal
          <s.ChatBoxToggle  onClick={ () => setIsExpanded(false)}>
            X
          </s.ChatBoxToggle>
        </s.ChatBoxHeader>
        <s.ChatBoxBody>
          <s.ChatOverlay>Proyecto X21JA-W32i-Alpha-Bravo</s.ChatOverlay>
          <s.ChatLogs>
            <ChatRelleno />
          </s.ChatLogs>
        </s.ChatBoxBody>
        <s.ChatFormContainer>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder=" Mensaje..." />
            <button type="submit">Enviar</button>
          </form>
        </s.ChatFormContainer>
      </s.ChatBox>
      }
    </>
  )
}
