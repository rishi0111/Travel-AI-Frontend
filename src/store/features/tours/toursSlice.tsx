import { createSlice } from "@reduxjs/toolkit";

interface Cities {
     name: string;
     id: string;
}

interface ToursState {
     countries: {
          name: string;
          id: string;
          cities: Cities[];
     };
     country: string
     state: string
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     tourDetails: any
}

const initialState: ToursState = {
     countries: {
          name: "",
          id: "",
          cities: []
     },
     country: "",
     state: "",
     tourDetails: null
};

const toursSlice = createSlice({
     name: "tours",
     initialState,
     reducers: {
          setCountries: (state, action) => {
               state.countries = action.payload;
          },
          setCountry: (state, action) => {
               state.country = action.payload
          },
          setStateName: (state, action) => {
               state.state = action.payload
          },
          setTourDetails: (state, action) => {
               state.tourDetails = action.payload
          }
     },
});

export const { setCountries, setCountry, setStateName, setTourDetails } = toursSlice.actions;
export default toursSlice.reducer;
