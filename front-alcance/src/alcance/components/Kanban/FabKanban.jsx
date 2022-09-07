import { useKanbanStore } from '../../../hooks'
import * as s from './Kanban.styles.js'
import styled from 'styled-components'

export const KanbanCircle = styled.div`
  border-radius: 100%;
  font-size: 16px;
  position: fixed;  
  right: 175px;
  width: 70px;
  height: 70px;
`

export const FabKanban = () => {
  const { setIsKanbanExpanded } = useKanbanStore();    

  return (
    <KanbanCircle className="btn btn-primary" onClick={() => setIsKanbanExpanded(true)}>
      <span style={{display: "block", 
      marginTop: "1.2rem", 
      fontSize:"0.8rem", 
      marginLeft:"-0.2rem"}}>KANBAN</span>
    </KanbanCircle>    
  )
}