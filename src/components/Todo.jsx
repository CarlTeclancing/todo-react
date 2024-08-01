import React from 'react'

export const Todo = ({task, togglecomplete}) =>{
  return (
    <div className='Todo'>
        <div className="todo-task">
            <p onClick={()=> togglecomplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
            <div>
                <button>Del</button>
                <button>Edit</button>
            </div>
        </div>

    </div>
  )
}
