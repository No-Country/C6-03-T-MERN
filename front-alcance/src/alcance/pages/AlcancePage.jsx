import { Navbar, Chat, Kanban  } from "../"
import { CalendarComponent} from "../components/CalendarComponent"


export const AlcancePage = () => {
  return (
    <>
      <Navbar />
      <CalendarComponent />
      <Chat />
      <Kanban />
    </>
  )
}
