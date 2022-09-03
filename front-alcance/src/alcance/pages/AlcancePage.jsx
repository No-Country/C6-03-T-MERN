import { Navbar, Chat, Kanban, WaitingRoom  } from "../"
import { CalendarComponent} from "../components/CalendarComponent"


export const AlcancePage = () => {
  return (
    <>
      <Navbar />
      <Kanban />
      <CalendarComponent />      
      <Chat />
      
    </>
  )
}
