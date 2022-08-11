

export const CalendarEventBox = ({event}) => {

  console.log(event)

  const { title, user, start } = event

  return (
    <>
      <strong>{ title }</strong>
      <span> - { user.name }</span>
    </>
  )
}
