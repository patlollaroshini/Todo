import React from 'react'

function TodoList(props) {
  return (
    <div className='text-center'>
        <h1>Todo list</h1>
        {props.todos.length==0 && <p className='display-5 text-danger'>List is empty!</p>}
        {
            props.todos.map((task,index)=><h3 key={index} className='text-primary'>
                {task}

            </h3>)
        }
    </div>
  )
}

export default TodoList