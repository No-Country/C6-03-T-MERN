import { useChatStore } from '../../../hooks'
import * as s from './Chat.styles.js'
import styled from 'styled-components'

export const ChatCircle = styled.div`
  border-radius: 100%;
  font-size: 16px;
  position: fixed;  
  right: 100px;
  width: 70px;
  height: 70px;
`

export const FabChat = () => {

  const { setIsChatExpanded } = useChatStore();    

  return (
    <ChatCircle className="btn btn-primary" onClick={() => setIsChatExpanded(true)}>
      <span style={{display: "block", marginTop: "1rem"}}>CHAT</span>
      </ChatCircle>    
  )
}