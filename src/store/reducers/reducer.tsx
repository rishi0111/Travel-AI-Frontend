import { createSlice } from '@reduxjs/toolkit';

export const myreducer = createSlice({
     name: 'myReducer',
     initialState: {
          data: null
     },
     reducers: {
          setData: (state, action) => {
               state.data = action.payload;
          },
     },
})

export const { setData } = myreducer.actions;
export default myreducer.reducer;

