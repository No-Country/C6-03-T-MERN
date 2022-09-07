
import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    usersList: []
  },
  reducers: {
    onGetUsersList: ( state, payload ) => {
      state.usersList = payload.payload;
      console.log(state.usersList);
    },
  }
});

// Action creators are generated for each case reducer function
export const { onGetUsersList } = chatSlice.actions;