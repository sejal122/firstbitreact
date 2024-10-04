import React from 'react'

function Todo({todos,addTodo}) {
    
    return (
        <div>
            {todos.map((todo,i)=>{
                return <p key={i}> {todo}</p>
            })}
             <button onClick={addTodo}> add new</button>
        </div>
       
    )
}

export default Todo
