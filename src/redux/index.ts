import { configureStore } from "@reduxjs/toolkit";

import ChatSlice from "./ChatSlice";

export const store = configureStore({  
    reducer: {
        ChatSlice: ChatSlice, 
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

