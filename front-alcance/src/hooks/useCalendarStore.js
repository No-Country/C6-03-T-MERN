import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { alcanceApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";


export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async( calendarEvent ) => {

    try {

      // Si todo bien
    if ( calendarEvent.id ){
      // Actualizando
      await alcanceApi.put(`/events/${ calendarEvent.id }`, calendarEvent );

      dispatch( onUpdateEvent({ ...calendarEvent, user }) );
      return;
    }
    // Creando
    const { data } = await alcanceApi.post('/events', calendarEvent );

    dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );

    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }

  }

  const startDeletingEvent = async() => {
    try {
      await alcanceApi.delete(`/events/${ activeEvent.id }`);
      dispatch( onDeleteEvent() );
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data.msg, 'error');
    }


  }

  const startLoadingEvents = async() => {
    try {

      const { data } = await alcanceApi.get('/events');
      const events = convertEventsToDateEvents( data.eventos );
      dispatch( onLoadEvents( events ) );
      console.log(events);

    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  }

  return {
    //* Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Métodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
    startLoadingEvents,
  }
}
