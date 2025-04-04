import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "./services/api/apiSlice";
import { authReducer } from './slices';

export const store = configureStore({
     reducer: {
          [apiSlice.reducerPath]: apiSlice.reducer,
          auth: authReducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;