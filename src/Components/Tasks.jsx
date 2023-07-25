import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,del} from '../Redux/TodoSlice'
import { useNavigate } from 'react-router-dom'


const Tasks = () => {

    const navigate=useNavigate()
    const lists=useSelector((state)=>state.todo.todo)
    const dispatch=useDispatch()
    const tasksref=useRef(null)
    console.log(lists);

  const handleSubmit=()=>{
    const task=tasksref.current.value
    dispatch(add(task))


  }

  const Delete=(id)=>{
    dispatch(del(id))


  }
  return (
    <div>

        <div>
            <label htmlFor="">Add Tasks</label>
            <input type="text"   ref={tasksref} />
            <button onClick={()=>handleSubmit()}  >Add Task</button>
        </div>



        <div>

            {lists.map((item)=>(
                <>
                <h3>{item.name}</h3>
                <button onClick={()=>navigate(`/edit/${item.id}`)} style={{backgroundColor:"green"}}> edit</button>
                <button  onClick={()=>Delete(item.id)} style={{backgroundColor:"red",marginLeft:"5px"}}>Delete</button>
                </>
            ))

            }



        </div>
      
    </div>
  )
}

export default Tasks
