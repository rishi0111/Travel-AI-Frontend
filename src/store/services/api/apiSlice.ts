import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl:  'http://snake.localhost:8000/'
    }),
    endpoints: (builder) => ({
          // login user
          loginUser: builder.mutation({
               query: (user) => ({
                    url: `api/login/`,
                    method: "POST",
                    body: user
               })
          }),

          // get projects
          getProjects: builder.query({
               query: (token) => ({
                    url: `api/projects/`,
                    headers: {
                         Authorization: `Bearer ${token}`,
                    },
                    method: "GET",
               })
          }),

     })
})

export const { useLoginUserMutation } = apiSlice;