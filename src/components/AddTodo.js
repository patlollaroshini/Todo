import {useState} from 'react'
import {useForm} from 'react-hook-form'
function AddTodo(props) {
//props=>{todos:[],addNewTodo:function}

let {register,handleSubmit,formState:{errors}}=useForm()

let formSubmit=(todoObj)=>{
    console.log(todoObj)
    props.addNewTodo(todoObj.newTodo)
}

  return (
    <div>
        <h1>Add Todo</h1>
         <form onSubmit={handleSubmit(formSubmit)}>
            <div className='mb-3'>
            <label htmlFor="tofo">Enter new task</label>
            <input type="text" id="todo" className='form-control' {...register("newTodo")} />
            </div>
            <button type="submit" className="btn btn-success">Add</button>
         </form>
    </div>
  )
}

export default AddTodo