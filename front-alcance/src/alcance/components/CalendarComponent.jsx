import { useState, useEffect } from "react";

import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { localizer, getMessagesES } from "../../helpers";
import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete } from "../";
import { useUiStore, useCalendarStore, useAuthStore } from "../../hooks";





export const CalendarComponent = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month' );

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );

    const style = {
      backgroundColor: isMyEvent ? '#747CF7' : '#ACBD85',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      fontFamily: 'Roboto'
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    openDateModal();
  }

  const onSelect = ( event ) => {
    setActiveEvent( event );
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event );
  }

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={ { height: 500 } }
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />

    </>
  )
}

