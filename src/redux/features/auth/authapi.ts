import { baseapi } from "../../api/baseapi";

const authapi = baseapi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userinfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userinfo,
      }),
    }),
  }),
});
export const { useLoginMutation } = authapi;
