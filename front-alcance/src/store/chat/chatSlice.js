
import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    usersList: [],
    isChatExpanded: false,
  },
  reducers: {   
    onSetUsersList: ( state, payload ) => {
      state.usersList = payload.payload;      
    },
    onSetIsChatExpanded: ( state, payload ) => {
      state.isChatExpanded = payload.payload;      
    },
  }
});

// Action creators are generated for each case reducer function
export const { onSetUsersList, onSetIsChatExpanded } = chatSlice.actions;