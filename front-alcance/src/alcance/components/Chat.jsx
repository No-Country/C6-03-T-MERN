// styles components
import styled from 'styled-components'
import * as s from './Chat.styles.js'
// styles css
import './Chat.styles.css'

export const Chat = () => {
  return (
    <>
      <s.ChatCircle>
        <s.ChatOverlay> Test </s.ChatOverlay>
        .ico
      </s.ChatCircle>
      <s.ChatBox>
        <s.ChatBoxHeader>
          Chat Grupal
          <s.ChatBoxToggle>X</s.ChatBoxToggle>
        </s.ChatBoxHeader>
        <s.ChatBoxBody>
          <s.ChatOverlay>Proyecto X21JA-W32i-Alpha-Bravo</s.ChatOverlay>
          <s.ChatLogs>
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
            HolaHola
            <br />
          </s.ChatLogs>
        </s.ChatBoxBody>
        <s.ChatInput>
          <form>
            <input type="text" placeholder="Mensaje..." />
            <button type="submit">Enviar</button>
          </form>
        </s.ChatInput>
      </s.ChatBox>
    </>
  )
}
