import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
     reducerPath: "chatApi",
     baseQuery: fetchBaseQuery({
          baseUrl: `${process.env.VITE_API_URL}/api/chat/threads`,
          credentials: "include",
          prepareHeaders: (headers) => {
               const token = Cookies.get('accessToken');
               if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
               }
               return headers;
          },
     }),

     endpoints: (builder) => ({

          sendMessage: builder.mutation({
               query: (message) => ({
                    url: "/send-message/",
                    method: "POST",
                    body: message,
               }),
          }),

          newThread: builder.mutation({
               query: () => ({
                    url: "/new-thread/",
                    method: "POST",
               }),
          }),

          getThreadMessages: builder.query({
               query: (threadId) => ({
                    url: `/${threadId}`,
               }),
          }),

          getAllThreads: builder.query({
               query: () => ({
                    url: "/",
               }),
          }),

     }),
})
