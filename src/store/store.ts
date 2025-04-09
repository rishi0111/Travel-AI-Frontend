import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authApi';
import sidebarReducer from './features/sidebar/sidebarSlice';
import { logger } from './middleware/logger';

export const store = configureStore({
     reducer: {
          auth: authReducer,
          sidebar: sidebarReducer,
          [authApi.reducerPath]: authApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(
               authApi.middleware,
               logger,
          ),
     devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 