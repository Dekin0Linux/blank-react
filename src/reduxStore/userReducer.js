import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : 'elivs',
    num : 100,
    age: 25
}

export const userSlice = createSlice({
    name : 'user',
    initialState,

    ///functions to change your states
    reducers:{
        changeName:(state,action)=>{
            state.name = action.payload
        },

        setNum:(state)=>{
            state.num = state.num - 1
        }
    }
})

//ezport all your function / actions
export const {changeName,setNum} = userSlice.actions

//export the reducer
export default userSlice.reducer