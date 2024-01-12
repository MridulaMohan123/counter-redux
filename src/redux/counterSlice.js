import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            console.log("increment clicked")
            state.value = state.value+action.payload;
        },
        decrement:(state,action)=>{
            console.log("decrement clicked")
            state.value = state.value - action.payload;
        },
        reset :(state)=>{
            state.value= 0;
        }
    }
})

export const {increment, decrement,reset}=counterSlice.actions

export default counterSlice.reducer
