import { useRef } from 'react';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

    

const ChatSlice = createSlice({  
    name: 'fetch',
    initialState: {
        user: [],
    },
    reducers: {
        loadMessage:(state:any, action: PayloadAction<object>) => { 
            state.user = action.payload
            console.log(state.user)
        },
    }
})

export const { loadMessage } = ChatSlice.actions
export default ChatSlice.reducer