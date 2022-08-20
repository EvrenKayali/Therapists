// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: () => ({}),
});

export const baseApi = emptySplitApi;
