import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, removeTodo, filterTodo } from "../../slices/todoSlice"

const TodoList = () =>  {
   const {list, filter} = useSelector((state) => state.todos)
   const dispatch = useDispatch()

   const filteredTodos = list.filter((todo) => {
      if(filter === "all") return true;
      if(filter === "completed") return todo.completed;
      if(filter === "incompleted") return !todo.completed;

      return true
   })

   return(
      <div>
         <button onClick={() => dispatch(filterTodo("all"))}>All</button>
         <button onClick={() => dispatch(filterTodo("completed"))}>Completed</button>
         <button onClick={() => dispatch(filterTodo("incompleted"))}>Incompleted</button>

         <ul>
            {filteredTodos.map((todo) => (
                <li key={todo.id}>
                  <span 
                   onClick={() => dispatch(toggleTodo(todo.id))}
                   className={todo.completed ? 'line-through' : ''}
                  > 
                     {todo.text} 
                  </span>
                  <button 
                   onClick={() => dispatch(removeTodo(todo.id))}
                  >
                     Remove
                  </button>   
                </li>
            ))}          
         </ul>

      </div>
   )
}

export default TodoList