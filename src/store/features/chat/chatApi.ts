import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
     reducerPath: "chatApi",
     baseQuery: fetchBaseQuery({
          baseUrl: `${import.meta.env.VITE_API_URL}/chat/threads`,
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


          getThreadMessages: builder.query({
               query: () => ({
                    url: `/all/`,
               }),
          }),

          getChatHistory: builder.query({
               query: (id) => ({
                    url: `/${id}`,
               }),
          }),
     }),
})

export const { useSendMessageMutation, useGetThreadMessagesQuery, useGetChatHistoryQuery } = chatApi;
