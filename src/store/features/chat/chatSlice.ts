import { createSlice } from "@reduxjs/toolkit";

interface Message {
     content: string;
     sender: string;
}

interface ChatState {
     messages: Message[]
}

const initialState: ChatState = {
     messages: []
};

const chatSlice = createSlice({
     name: "chat",
     initialState,
     reducers: {
          addMessage: (state, action) => {
               state.messages.push(action.payload);
          }
     },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
