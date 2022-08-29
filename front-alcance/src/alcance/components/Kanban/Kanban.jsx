import { useState, useEffect, useRef } from 'react'
import * as s from './Kanban.styles.js'

export const Kanban = () => {

  const posX = 40;
  const KanbanTitle = "Formularios"
  const KanbanDescription = "Kanban para organizar el desarrollo de formularios"
  
  const [isExpanded, setIsExpanded] = useState(false)
  const [newDescription, setNewDescription] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDuration, setNewDuration] = useState('')
  const [kanbanMessages, setKanbanMessages] = useState(
    [
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
      {title: "hola", description: "hola como estan hola como estan", state: "Borrador"},
    ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newDescription.trim() !== '') {      
      setKanbanMessages((oldKabanMessages) => [
        ...oldKabanMessages,
        { title: newTitle.trim(), description: newDescription.trim(), state: "Borrador" }
      ])
      setNewTitle('')
      setNewDescription('')
    }
  }
  
  return (
    <>
      {isExpanded === false && (
        <s.ChatCircle onClick={() => setIsExpanded(true)}>          
          Kanban
        </s.ChatCircle>
      )}
      {isExpanded && (
        <>
          <s.ChatBox right={posX+13 + "rem"} bottom="30px" width="350px" shadow="true">
            <s.ChatBoxHeader>
              Plantillas de Tarea             
              <s.ChatBoxToggle onClick={() => setIsExpanded(false)}>
                X
              </s.ChatBoxToggle>
            </s.ChatBoxHeader>
            <s.ChatBoxBody>
              <s.ChatLogs>
                {kanbanMessages.map((m, index) => {
                  if (m.state === "Borrador")
                  return (
                    <s.ChatLog>
                      <s.ChatMessageAuthor>{m.title}:</s.ChatMessageAuthor>
                      <s.ChatMessageText>{m.description}</s.ChatMessageText>
                      <span>➡️ Avanzar </span>
                      <span>❌ Eliminar </span>
                      <span>✍ Editar </span>
                    </s.ChatLog>
                  )
                })}                
              </s.ChatLogs>
            </s.ChatBoxBody>
            <s.ChatFormContainer>
              <form onSubmit={handleSubmit}>  
              <div> Nueva Plantilla de Tarea: </div>              
                  <input
                    type="text"
                    placeholder=" Titulo..." 
                    onChange={ (e) => setNewTitle(e.target.value)}                                       
                    value={newTitle}
                  /> 
                  <input
                    type="text"
                    placeholder=" Descripcion..."                                        
                    onChange={ (e) => setNewDescription(e.target.value)}                                       
                    value={newDescription}
                  />  
                  <select>
                    <option value="" disabled selected hidden>Estado</option>
                    <option value="Borrador"> Borrador </option>
                  </select>   
                  <select>
                    <option value="" disabled selected hidden>Usuario</option>
                    <option value="Borrador"> Pepe </option>
                  </select> 
                  <select>
                    <option value="" disabled selected hidden>Dificultad</option>
                    <option value="Borrador"> Facil </option>
                  </select>          
                  <input type="number"
                    placeholder=" Duracion..."                                        
                    onChange={ (e) => setNewDuration(e.target.value)}                                       
                    value={newDuration}>                     
                  </input>          
                <button type="submit">Enviar</button>
              </form>
            </s.ChatFormContainer>
          </s.ChatBox>          
            <s.ChatBox right={posX + "rem"} bottom="72px" width="12.5rem" shadow="yes">
              <s.ChatBoxHeader>Tareas Pendiente</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">                            
              <s.ChatLogs>                 
                  {kanbanMessages.map((m, index) => {
                  if (m.state === "Borrador")
                  return (
                    <s.ChatLog>
                      <s.ChatMessageAuthor>{m.title} ({m.state})</s.ChatMessageAuthor>
                      <s.ChatMessageText>{m.description.substring(0, 20) + "..."}<span>➡️</span>                      
                      <span>✍</span></s.ChatMessageText>                      
                    </s.ChatLog>
                  )
                })}           
                </s.ChatLogs>                
              </s.ChatBoxBody>
            </s.ChatBox>  
            <s.ChatBox right={posX-13 + "rem"} bottom="72px" width="12.5rem" shadow="yes">
              <s.ChatBoxHeader>Tareas En Proceso</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">                
                <s.ChatLogs>                 
                  {kanbanMessages.map((m, index) => {
                  if (m.state === "Borrador")
                  return (
                    <s.ChatLog>
                      <s.ChatMessageAuthor>{m.title}:</s.ChatMessageAuthor>
                      <s.ChatMessageText>{m.description.substring(0, 20) + "..."}<span>➡️</span>                      
                      <span>✍</span></s.ChatMessageText>                      
                    </s.ChatLog>
                  )
                })}           
                </s.ChatLogs>                
              </s.ChatBoxBody>
            </s.ChatBox>        
            <s.ChatBox right={posX-26 + "rem"} bottom="72px" width="12.5rem" shadow="yes">
              <s.ChatBoxHeader>Tareas Finalizado</s.ChatBoxHeader>
              <s.ChatBoxBody heigth="400">
              <s.ChatLogs>                 
                  {kanbanMessages.map((m, index) => {
                  if (m.state === "Borrador")
                  return (
                    <s.ChatLog>
                      <s.ChatMessageAuthor>{m.title}:</s.ChatMessageAuthor>
                      <s.ChatMessageText>{m.description.substring(0, 20) + "..."}<span>➡️</span>                      
                      <span>✍</span></s.ChatMessageText>                      
                    </s.ChatLog>
                  )
                })}           
                </s.ChatLogs> 
              </s.ChatBoxBody>
            </s.ChatBox>    
        </>
      )}
    </>
  )
}
