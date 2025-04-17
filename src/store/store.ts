import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import { authApi } from './features/auth/authApi';
import sidebarReducer from './features/sidebar/sidebarSlice';
import chatReducer from './features/chat/chatSlice';
import { logger } from './middleware/logger';
import { contactUsApi } from './features/contact-us/contactUsApi';
import toursReducer from './features/tours/toursSlice';
import { toursApi } from './features/tours/toursApi';

export const store = configureStore({
     reducer: {
          auth: authReducer,
          sidebar: sidebarReducer,
          tours: toursReducer,
          chat: chatReducer,
          [authApi.reducerPath]: authApi.reducer,
          [contactUsApi.reducerPath]: contactUsApi.reducer,
          [toursApi.reducerPath]: toursApi.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(
               authApi.middleware,
               contactUsApi.middleware,
               toursApi.middleware,
               logger,
          ),
     devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 