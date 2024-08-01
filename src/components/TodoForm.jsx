import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form action="" className='TodoForm' onSubmit={handleSubmit}>
      <div className="todo-container">
      <input type="text" placeholder='Enter todays task' name="todo" id="todo" value={value} className='todo-input' onChange={(e) => setValue(e.target.value)} />
      <button className="todo-btn">Add Task</button>
      </div>

    </form>
  )
}
