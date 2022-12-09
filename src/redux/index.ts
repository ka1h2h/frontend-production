import { configureStore } from "@reduxjs/toolkit";

import { ChatSlice } from "./ChatSlice";
import { UserSlice } from "./UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    chat: ChatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
