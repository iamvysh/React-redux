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
            
        },
        del:(state,action)=>{
            const id=action.payload
            state.todo=state.todo.filter((item)=>item.id!==id)
        },
        update:(state,action)=>{
            const {id,name}=action.payload;
            state.todo=state.todo.map((item)=>{
                if(item.id==id){
                    return ({...item,name})
                }
                return item
            })
        }
    }
})

export const {add,del,update}=todoSlice.actions

export default todoSlice.reducer