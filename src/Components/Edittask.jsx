import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { update } from '../Redux/TodoSlice'

const Edittask = () => {

     
    const navigate=useNavigate()

    const editref=useRef()
    const {id}=useParams()
    const dispatch=useDispatch()

    console.log(id);
  
  const list=useSelector((state)=>state.todo.todo)

  const edirprododuct=list.filter((i)=>i.id==id)

  const handleEdit=(id)=>{

    const upadatedtodo=editref.current.value
    console.log(upadatedtodo);
    dispatch(update({id:id,name:upadatedtodo}))
    navigate("/")
  }
  



  return (

    <div>

        <label htmlFor="">Edit Task</label>

        <input type="text"  defaultValue={edirprododuct[0].name} ref={editref} />
        
        <button onClick={()=>handleEdit(edirprododuct[0].id)} style={{backgroundColor:"green"}}>Ok</button>



      
    </div>
  )
}

export default Edittask
