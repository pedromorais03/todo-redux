import React from "react"

const TodoList = () =>  {
   return(
      <div>
         <button>All</button>
         <button>Completed</button>
         <button>Incompleted</button>

         <ul>
            <li>
               <span> Some text </span>
               <button>Remove</button>   
            </li>
            <li>
               <span className="line-through"> Some text </span>
               <button>Remove</button>   
            </li>
           
         </ul>

      </div>
   )
}

export default TodoList