import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from "date-fns";

import { localizer, getMessagesES } from "../../helpers";
import { CalendarEventBox } from "../";



const events = [{
  title: 'Meet with TL',
  notes: 'Crear ToDo',
  start: new Date(),
  end: addHours( new Date(), 24 ),
  bgColor: '#000',
  user: {
    _id: '123',
    name: 'Enuel'
  }
}]

export const CalendarComponent = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#747CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      fontFamily: 'Roboto'
    }

    return {
      style
    }
  }

  return (
    <div>
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={ { height: 500 } }
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
      />
    </div>
  )
}

