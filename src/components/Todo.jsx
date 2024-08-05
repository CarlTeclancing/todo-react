import React from 'react'

export const Todo = ({task, togglecomplete, deleteTodo}) =>{
  return (
    <div className='Todo'>
        <div className="todo-task" key={task.id}>
            <p onClick={()=> togglecomplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
            <div>
                <button onClick={()=>{
                  deleteTodo(task.id)
                }}>Del</button>
                <button>Edit</button>
            </div>
        </div>

    </div>
  )
}
