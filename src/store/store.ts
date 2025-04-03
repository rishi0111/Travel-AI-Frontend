import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "./services/authSlice";
import myreducer from './reducers/reducer';

export const store = configureStore({
     reducer: {
          [apiSlice.reducerPath]: apiSlice.reducer,
          myReducer: myreducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;