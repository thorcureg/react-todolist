import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiOutlineEdit, } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";

export const Todo = ({task, toggleComplete,deleteTodo,editTodo}) => {
    return (
        <div className='Todo'>
           <p onClick={() => toggleComplete(task.id)} 
           className={`${task.completed ? 'completed': ""}`}> {task.task}
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
        <AiOutlineEdit onClick={() => editTodo(task.id)}/>
        <BsTrash3Fill onClick={() => deleteTodo(task.id)}/>
        </div>
        
        </div>

    )
}