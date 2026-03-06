import { RiDeleteBack2Line, RiEdit2Line } from "react-icons/ri";

import { useState } from "react";

import { update_todo } from "../api/endpoints"

interface TodoProps {
    id: number;
    todo_name: string;
    completed: boolean;
    deleteTodo: (id: number) => void;
    setEditingId: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({id, todo_name, completed, deleteTodo, setEditingId}) => {

    const [isChecked, setChecked] = useState<boolean>(completed)

    const handleDelete = async () => {
        await deleteTodo(id);
    }

    const handleComplete = async () => {
        update_todo(id, !isChecked)
        setChecked(!isChecked)
    }
    return (
        <div className="todo">
            <div className="todo-container">
                <input checked={isChecked} onChange={handleComplete} type="checkbox"/>
                <h3 onDoubleClick={() => setEditingId(id)}>{todo_name}</h3>

                <div className="actions">
                    <RiEdit2Line 
                        onClick={() => setEditingId(id)} 
                        size='20px' 
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                    />
                    
                <RiDeleteBack2Line onClick={handleDelete} size='20px'/>

                </div>
            </div>
        </div>
    )
}

export default Todo;