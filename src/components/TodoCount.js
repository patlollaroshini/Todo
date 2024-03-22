import React from 'react'

function TodoCount(props) {
  return (
    <div  className='text-center'>
        <h1>Todo Count</h1>
        <p className="display-3 text-warning ">{props.todos.length}</p>
    </div>
  )
}

export default TodoCount