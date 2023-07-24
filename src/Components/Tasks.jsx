import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/TodoSlice'


const Tasks = () => {
    
    const lists=useSelector((state)=>state.todo.todo)
    const dispatch=useDispatch()
    const tasksref=useRef(null)
    console.log(lists);

  const handleSubmit=()=>{
    const task=tasksref.current.value
    dispatch(add(task))


  }
  return (
    <div>

        <div>
            <label htmlFor="">Add Tasks</label>
            <input type="text"   ref={tasksref} />
            <button onClick={()=>handleSubmit()} >Add Task</button>
        </div>



        <div>

            {lists.map((item)=>(
                <h3>{item.name}</h3>
            ))

            }



        </div>
      
    </div>
  )
}

export default Tasks
