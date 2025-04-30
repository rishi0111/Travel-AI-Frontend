import { createSlice } from "@reduxjs/toolkit";

interface Message {
     content: string;
     sender: string;
     responseType?: string;
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     tourDetails?: any[];
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     popularDestinations?: any[];
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     tourPackages?: any[];
}

interface TourDetail {
     id: number;
     location: {
          id: number;
          address: string;
          latitude: string;
          longitude: string;
          zoom: number;
     };
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     itinerary: any[];
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     inclusion_exclusions: any[];
     // add other fields as needed
}

interface ChatState {
     messages: Message[];
     tourDetails?: TourDetail[];
     threadUid?: string;
     isLoading: boolean;
     historyLoading: boolean;
}

const initialState: ChatState = {
     messages: [],
     tourDetails: undefined,
     threadUid: undefined,
     isLoading: false,
     historyLoading: false,
};

const chatSlice = createSlice({
     name: "chat",
     initialState,
     reducers: {
          addMessage: (state, action) => {
               state.messages.push(action.payload);
          },
          setTourDetails: (state, action) => {
               state.tourDetails = action.payload;
          },
          clearTourDetails: (state) => {
               state.tourDetails = undefined;
          },
          threadUid: (state, action) => {
               state.threadUid = action.payload;
          },
          setMessages: (state, action) => {
               state.messages = action.payload;
          },
          setLoading: (state, action) => {
               state.isLoading = action.payload;
          },
          setHistoryLoading: (state, action) => {
               state.historyLoading = action.payload;
          }
     },
});

export const { 
     addMessage, 
     setTourDetails, 
     clearTourDetails, 
     threadUid, 
     setMessages, 
     setLoading,
     setHistoryLoading 
} = chatSlice.actions;
export default chatSlice.reducer;
