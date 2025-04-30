import { createSlice } from "@reduxjs/toolkit";

interface Message {
     content: string;
     sender: string;
     responseType?: string;
     tourDetails?: any[];
     popularDestinations?: any[];
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
     itinerary: any[];
     inclusion_exclusions: any[];
     // add other fields as needed
}

interface ChatState {
     messages: Message[];
     tourDetails?: TourDetail[];
     threadUid?: string;
     isLoading: boolean;
}

const initialState: ChatState = {
     messages: [],
     tourDetails: undefined,
     threadUid: undefined,
     isLoading: false,
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
          }
     },
});

export const { addMessage, setTourDetails, clearTourDetails, threadUid, setMessages, setLoading } = chatSlice.actions;
export default chatSlice.reducer;
