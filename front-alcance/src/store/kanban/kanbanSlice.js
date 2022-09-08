
import { createSlice } from "@reduxjs/toolkit";

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: {
    tasksList: [],
    isKanbanExpanded: false,
  },
  reducers: {   
    onSetTasksList: ( state, payload ) => {
      state.tasksList = payload.payload;      
    },
    onSetIsKanbanExpanded: ( state, payload ) => {
      state.isKanbanExpanded = payload.payload;      
    },
  }
});

// Action creators are generated for each case reducer function
export const { onSetTasksList, onSetIsKanbanExpanded } = kanbanSlice.actions;