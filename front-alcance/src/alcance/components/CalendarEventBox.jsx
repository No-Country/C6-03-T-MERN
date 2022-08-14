

export const CalendarEventBox = ({event}) => {

  const { title, user, start } = event

  return (
    <>
      <strong>{ title }</strong>
      <span> - { user.name }</span>
    </>
  )
}
