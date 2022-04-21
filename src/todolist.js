import React, {useState} from 'react';
import Todo from './todo';
import TodoForm from './todoForm';
import Todo from './todo';

function Todolist(props) {

   const [todos, setTodos] = useState([]);

   const addToDo = todo => {

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  //  console.log(todo, ...todos)


   }

    
  return (
      <>
    <div>todolist</div>
   <TodoForm onSubmit={addToDo}/>
   <Todo />
      </>
  )
}

export default Todolist