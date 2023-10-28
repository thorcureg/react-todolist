import React,{useState} from 'react'


export const TodoForm = ({addTodo}) => {
    const [value,SetValue] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value)
        SetValue("")
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" 
            className='todo-input'
            placeholder='what is the task today' value={value} 
            onChange={(e)=>SetValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form> 
    )
}