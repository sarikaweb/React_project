import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './todoForm';


function Todoist() {

   const [todos, setTodos] = useState([]);

   const addToDo = todo => {

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  //  console.log(todo, ...todos)


   }


const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id)

  setTodos(removeArr)
}

const updateTodo = (todoId, newValue) =>  {
setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
}

const completeTodo = id => {
  let UpdatedTodos = todos.map(todo => {
    if(todo.id === id) {
      todo.isComplete = !todo.isComplete;
    }

    return todo;
  });
setTodos(UpdatedTodos);
};
    
  return (
      <>
      <div>todolist</div>
      <TodoForm onSubmit={addToDo}/>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </>
  )
}

export default Todoist