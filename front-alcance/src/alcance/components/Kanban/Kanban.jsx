import { useState, useEffect, useRef } from 'react'
import * as s from './Kanban.styles.js'
import { KanbanTask } from './KanbanTask.jsx'

export const Kanban = () => {
  const posX = 47
  const KanbanTitle = 'Formularios'
  const KanbanDescription = 'Kanban para organizar el desarrollo de formularios'

  const [isExpanded, setIsExpanded] = useState(false)
  const [newDescription, setNewDescription] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDuration, setNewDuration] = useState('')
  const [kanbanMessages, setKanbanMessages] = useState([
    {
      id: 1,
      title: 'Hacer el Login',
      description: 'Hola como estan hola como estan',
      state: 'Pendiente'
    },
    {
      id: 2,
      title: 'Hacer el Register',
      description: 'Hola como estan hola como estan',
      state: 'En Proceso'
    },
    {
      id: 3,
      title: 'Crear los Modelos',
      description: 'Hola como estan hola como estan',
      state: 'Finalizado'
    },
    {
      id: 4,
      title: 'Crear el Logo',
      description: 'Hola como estan hola como estan',
      state: 'Pendiente'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newDescription.trim() !== '') {
      setKanbanMessages((oldKabanMessages) => [
        ...oldKabanMessages,
        {
          title: newTitle.trim(),
          description: newDescription.trim(),
          state: e.target.state.value
        }
      ])
      setNewTitle('')
      setNewDescription('')
    }
  }

  const handleUpdateState = (id) =>
  {
    const message = kanbanMessages.filter( (km) => km.id === id);
    console.log(message[0].id); 
    const otherMessage = kanbanMessages.filter( (km) => km.id !== id);   
    const test = [ ...otherMessage];
    let newState = "Pendiente";
    if (message[0].state === "Pendiente") newState = "En Proceso"
    if (message[0].state === "En Proceso") newState = "Finalizado"
    if (message[0].state === "Finalizado") newState = "Pendiente"
    test.push({
      id: message[0].id,
      title: message[0].title,
      description: message[0].description,
      state: newState
    })
    console.log(test);
    setKanbanMessages(test);
  }

  return (
    <>
      {isExpanded === false && (
        <s.ChatCircle onClick={() => setIsExpanded(true)}>Kanban</s.ChatCircle>
      )}
      {isExpanded && (
        <>
          <s.ChatBox right={'0.5rem'} bottom="4rem" width="20rem" shadow="true">
            <s.ChatFormContainer>
              <form onSubmit={handleSubmit}  style={{height: "auto"}}>
                <div> Nueva Tarea: </div>
                <input
                  type="text"
                  name="title"
                  placeholder=" Titulo..."
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                />                
                  <textarea
                    rows="10"
                    cols="40"
                    style={{height: "10rem"}}                  
                    name="description"
                    placeholder=" Descripcion..."
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                  />
                <select name="state">
                  <option value="" disabled selected hidden>
                    Estado
                  </option>
                  <option value="Pendiente">Pendiente</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Finalizado">Finalizado</option>
                </select>
                <select name="user">
                  <option value="" disabled selected hidden>
                    Usuario
                  </option>
                  <option value="Jose">Jose</option>
                  <option value="Juan">Juan</option>
                  <option value="Pablo">Pablo</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>
                    Dificultad
                  </option>
                  <option value="Facil">Facil</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Dificil">Dificil</option>
                </select>
                <input
                  type="number"
                  placeholder=" Duracion..."
                  onChange={(e) => setNewDuration(e.target.value)}
                  value={newDuration}
                ></input>
                <button type="submit" style={{ alignSelf: 'flex-end' }}>
                  Enviar
                </button>
              </form>
            </s.ChatFormContainer>
          </s.ChatBox>

          <s.ChatBox
            right={posX + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.ChatBoxHeader>
              Tareas Finalizadas
              <s.ChatBoxToggle onClick={() => setIsExpanded(false)}>
                X
              </s.ChatBoxToggle>
            </s.ChatBoxHeader>
            <s.ChatBoxBody heigth="400">
              <s.ChatLogs>
                {kanbanMessages.map((item, index) => {
                  if (item.state === 'Finalizado')
                    return <KanbanTask key={index} item={item} handleUpdateState={handleUpdateState}/>
                })}
              </s.ChatLogs>
            </s.ChatBoxBody>
          </s.ChatBox>
          <s.ChatBox
            right={posX - 13 + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.ChatBoxHeader>Tareas En Proceso</s.ChatBoxHeader>
            <s.ChatBoxBody heigth="400">
              <s.ChatLogs>
                {kanbanMessages.map(
                  (item, index) =>
                    item.state === 'En Proceso' && <KanbanTask  key={index} item={item}  handleUpdateState={handleUpdateState}/>
                )}
              </s.ChatLogs>
            </s.ChatBoxBody>
          </s.ChatBox>
          <s.ChatBox
            right={posX - 26 + 'rem'}
            bottom="4rem"
            width="12.5rem"
            shadow="yes"
          >
            <s.ChatBoxHeader>Tareas Pendientes</s.ChatBoxHeader>
            <s.ChatBoxBody heigth="400">
              <s.ChatLogs>
                {kanbanMessages.map((item, index) => {
                  if (item.state === 'Pendiente')
                    return <KanbanTask  key={index} item={item} handleUpdateState={handleUpdateState}/>
                })}
              </s.ChatLogs>
            </s.ChatBoxBody>
          </s.ChatBox>
        </>
      )}
    </>
  )
}
