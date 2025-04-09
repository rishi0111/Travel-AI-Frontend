import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie';

export const authApi = createApi({
     reducerPath: "authApi",
     baseQuery: fetchBaseQuery({
          baseUrl: `${import.meta.env.VITE_API_URL}/auth`,
          credentials: "include",
          prepareHeaders: (headers, { endpoint }) => {
               const token = Cookies.get('accessToken');

               if (token && endpoint !== 'loginUser' && endpoint !== 'registerUser') {
                    headers.set('Authorization', `Bearer ${token}`);
               }

               return headers;
          },
     }),

     endpoints: (builder) => ({

          loginUser: builder.mutation({
               query: (credentials) => ({
                    url: "/login/",
                    method: "POST",

                    body: credentials,
               }),
          }),

          registerUser: builder.mutation({
               query: (credentials) => ({
                    url: "/register/",
                    method: "POST",
                    body: credentials,
               }),
          }),

          changePassword: builder.mutation({
               query: (credentials) => ({
                    url: "/change-password",
                    method: "POST",
                    body: credentials,
               }),
          }),

          requestOtp: builder.mutation({
               query: (credentials) => ({
                    url: "/password-reset/request-otp/",
                    method: "POST",
                    body: credentials,
               }),
          }),

          verifyOtp: builder.mutation({
               query: (credentials) => ({
                    url: "/password-reset/verify-otp/",
                    method: "POST",
                    body: credentials,
               }),
          }),

          setNewPassword: builder.mutation({
               query: (credentials) => ({
                    url: "/password-reset/change-password/",
                    method: "POST",
                    body: credentials,
               }),
          }),

          socialLogin: builder.mutation({
               query: (credentials) => ({
                    url: "/",
                    method: "POST",
                    body: credentials,
               }),
          }),
     }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useChangePasswordMutation, useRequestOtpMutation, useVerifyOtpMutation, useSetNewPasswordMutation, useSocialLoginMutation } = authApi;
