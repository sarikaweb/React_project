import React, {useState} from 'react';
import TodoForm from './todoForm.js'


function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    
  return todos.map((todo, index) => (

    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}

       </div>

       <div className='icons'>
           <button onClick={() => removeTodo(todo.id)} className='delete-icon'>Delete </button>
           <button onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'> Edit</button>
       </div>
    </div>
  ))
}

export default Todo