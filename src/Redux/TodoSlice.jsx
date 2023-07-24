import { createSlice} from "@reduxjs/toolkit";


const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todo:[],
    },
    
    reducers:{
        add:(state,action)=>{
            state.todo=[...state.todo,{
                id:Date.now(),
                name:action.payload
            }]
            console.log(state.todo);
        }
    }
})

export const {add}=todoSlice.actions

export default todoSlice.reducer