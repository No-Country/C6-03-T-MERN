import * as s from './Kanban.styles.js'
import { useState } from 'react'

export const KanbanTask = (props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <s.Log>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '1.5rem' }}>✍</span>
        <span style={{ fontSize: '1.5rem' }}>👨‍💼</span>
        <span
          style={{ fontSize: '1.5rem' }}
          onClick={() => setIsExpanded((oldValue) => !oldValue)}
        >
          👀
        </span>
        <span
          style={{ fontSize: '1.5rem' }}
          onClick={() => props.handleUpdateState(props.item.id)}
        >
          ➡️
        </span>
      </div>
      <s.Title>{props.item.title.toUpperCase()}</s.Title>
      <s.Text>
        {!isExpanded && props.item.description.substring(0, 25) + '...'}
        {isExpanded && props.item.description}
      </s.Text>
      <s.Author>{props.item.username.toUpperCase()}</s.Author>
      {props.showState === "true" && <div>{props.item.state}</div>}
    </s.Log>
  )
}
