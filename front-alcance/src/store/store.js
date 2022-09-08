import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice, authSlice, chatSlice, kanbanSlice } from "./";



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
    chat: chatSlice.reducer,
    kanban: kanbanSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});