import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

export const contactUsApi = createApi({
     reducerPath: "contactUsApi",
     baseQuery: fetchBaseQuery({
          baseUrl: `${import.meta.env.VITE_API_URL}/chat/contact/`,
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
          contactUs: builder.mutation({
               query: (data) => ({
                    url: "/",
                    method: "POST",
                    body: data,
               }),
          }),
     }),
});

export const { useContactUsMutation } = contactUsApi;
