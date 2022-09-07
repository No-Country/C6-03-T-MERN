import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice, authSlice, chatSlice } from "./";



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
    chat: chatSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});