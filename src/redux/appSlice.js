import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name:"appSlice",
    initialState:{
        firstName:"Pampam",
        lastName:"",
        friends:[],
        count:10
    },

    reducers:{
        increaseCount:(state)=>{
            state.count++
        },

        decreaseCount:(state)=>{
            state.count--
        },

        increaseByNum:(state, action)=>{
            state.count= state.count+action.payload
        },

        addFriends:(state, action)=>{
            state.friends.push(action.payload)
        }
    }

})


export default appSlice.reducer

export const {increaseCount, decreaseCount, increaseByNum, addFriends}= appSlice.actions