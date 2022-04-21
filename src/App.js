import './App.css';
import Todolist, {useState} from './todolist';

function App() {
  return (
    <div className="todo-app">
      <div className="todolist">
      <Todolist />
      </div>
    </div>
  );
}

export default App;
