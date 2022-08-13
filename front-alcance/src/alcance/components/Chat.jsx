import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import './Chat.styles.css'

const ChatContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;
  overflow-y: hidden;
  overflow-x: hidden;
`

const containerVariants = {
  expanded: {
    bottom: '3rem',
    right: '0rem',
    width: '25rem',
    height: '35rem',
    borderRadius: '0%',
    backgroundColor: '#fff',
    color: 'black',
    justifyContent: 'flex-end',
    maxWidth: '90%',
    maxHeight: '70%'
  },
  collapsed: {
    right: '1rem',
    bottom: '1rem',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    backgroundColor: '#000',
    color: 'white',
    justifyContent: 'center',
    maxWidth: '90%',
    maxHeight: '70%'
  }
}

const transition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 30
}

export const Chat = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      {/* <ChatContainer
        initial={false}
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={containerVariants}
        transition={transition}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {!isExpanded && 'Chat'}
      </ChatContainer>
      {isExpanded && (
        <div style={{ position: 'absolute', right: '0px', bottom: '0px' }}>
          <form>
            <label style={{ margin: '0.5rem' }}>Mensaje: </label>
            <input style={{ margin: '0.5rem' }} type="text" />
            <button style={{ margin: '0.5rem' }}> Enviar </button>
          </form>
        </div>
      )} */}

    <div id="chat-circle" className="btn btn-raised">
        <div id="chat-overlay"></div>
		    <i className="material-icons">speaker_phone</i>
	</div>

      <div className="chat-box">
        <div className="chat-box-header">
          Alcance Chat
          <span className="chat-box-toggle">
            <i className="material-icons">X</i>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
        </div>
        <div className="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Enviar al grupo..."
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="enviar"> Enviar</i>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
