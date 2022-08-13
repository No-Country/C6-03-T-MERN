// styles components
import styled from 'styled-components'
import * as s from './Chat.styles.js'
// styles css
import './Chat.styles.css'

export const Chat = () => {
  return (
    <>
      <s.ChatCircle className="btn btn-raised">
        <div id="chat-overlay"></div>
        <i className="material-icons">speaker_phone</i>
      </s.ChatCircle>
      <s.ChatBox>
        <s.ChatBoxHeader>
          Alcance Chat
          <s.ChatBoxToggle>
            X
          </s.ChatBoxToggle>
        </s.ChatBoxHeader>
        <s.ChatBoxBody>
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
        </s.ChatBoxBody>
        <s.ChatInput>
          <form>
            <input type="text"              
              placeholder="Enviar al grupo..."
            />
            <button type="submit">
              Enviar
            </button>
          </form>
        </s.ChatInput>
      </s.ChatBox>
    </>
  )
}
