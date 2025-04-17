import Cookies from 'js-cookie';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toursApi = createApi({
     reducerPath: "toursApi",
     baseQuery: fetchBaseQuery({
          baseUrl: `${import.meta.env.VITE_API_URL}/database`,
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
          getCountries: builder.query({
               query: () => ({
                    url: "/countries/",
               }),
          }),

          getPackages: builder.mutation({
               query: (data) => ({
                    url: "/search-tours/",
                    method: "POST",
                    body: data,
               }),
          }),

          getPackagesByDestination: builder.query({
               query: (destinationId) => ({
                    url: `/tour-detail/${destinationId}`,
               }),
          }),
     }),
})

export const { useGetCountriesQuery, useGetPackagesMutation, useGetPackagesByDestinationQuery } = toursApi;
