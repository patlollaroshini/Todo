import {useState} from 'react'

import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoCount from './components/TodoCount';

function App() {

  let [todos,setTodos]=useState([])

   let addNewTodo=(todo)=>{
    setTodos([...todos,todo])
   }
console.log("todos",todos)

  return (
    <div className="container">
     
  <div className='row'>
    <div className='col-sm-4 text-success'> 
    <AddTodo  todos={todos} addNewTodo={addNewTodo} />
    </div>
    <div className="col-sm-4 text-success "> 
     <TodoList todos={todos} />
     </div>
    <div className="col-sm-4  text-success"> 
      <TodoCount todos={todos}/>
       </div>
   
     </div>
    </div>
  );
}

export default App;
