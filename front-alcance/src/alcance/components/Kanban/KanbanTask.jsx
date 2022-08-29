import * as s from './Kanban.styles.js'

export const KanbanTask = (props) => {
  
  const handleNext = () =>  
  {

  }


  return (
  <s.ChatLog>
    <div
      style={{display: 'flex', justifyContent: "space-between"}}
    >
      <span style={{ fontSize: '1.5rem' }}>✍</span>
      <span style={{ fontSize: '1.5rem' }}>👨‍💼</span>
      <span style={{ fontSize: '1.5rem' }} onClick={() => props.handleUpdateState(props.item.id)}>➡️</span>
    </div>
    <s.ChatMessageAuthor>{props.item.title.toUpperCase()}</s.ChatMessageAuthor>
    <s.ChatMessageText>
      {props.item.description.substring(0, 50) + '...'}
    </s.ChatMessageText>
  </s.ChatLog>
)
  }
