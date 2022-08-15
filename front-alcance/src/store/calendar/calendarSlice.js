import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

//! Debe venir del backend
const tempEvent = {
  _id: new Date().getTime(),
  title: 'Meet with TL',
  notes: 'Crear ToDo',
  start: new Date(),
  end: addHours( new Date(), 24 ),
  bgColor: '#000',
  user: {
    _id: '123',
    name: 'Enuel'
  }
}


export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: ( state, { payload } ) => {
      state.activeEvent = payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;