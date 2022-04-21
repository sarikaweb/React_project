import React, {useState} from 'react'

function TodoForm(props) {

    const [inputVal, setInputVal] = useState('');

    const inputChange_fn = e => {
        setInputVal(e.target.value);
    }

    const AddButton_fun = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputVal
        });

        setInputVal("");


    };
  return (
      <>
    <form className='todolist-form'  onSubmit={AddButton_fun}>
    <input type="text" placeholder='Enter List Here..' value={inputVal} name="text" className='todolist-input' onChange={inputChange_fn}/>
    <button className='todolist-button'>Add Here</button>
    </form>
      </>
  )
}

export default TodoForm