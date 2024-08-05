import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
var id = 0; 
export const TodoWrapper = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    
    setTodos([...todos,  {id:++id, task:todo, completed:false, isEditing:false}])
    console.log(todos)
  }

  const togglecomplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
  const deleteTodo = (id) =>{
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} togglecomplete={togglecomplete}/>
      ))}
      
    </div>

  )
}
