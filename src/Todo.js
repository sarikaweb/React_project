import React, {useState} from 'react';
import TodoForm from './todoForm'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
  return todos.map((todo, index) => (

    <div key={index}>
       <div key={todo.id} onClick={completeTodo(thi.id)}>
            {todo.text}

       </div>

       <div className='icons'>
           <span>Close</span>
           <span>Edit</span>
       </div>
    </div>
  ))
}

export default Todo