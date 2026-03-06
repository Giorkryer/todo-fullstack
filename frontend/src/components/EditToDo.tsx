import { useState } from "react";
import { Todo } from "../types/Todo";

interface EditTodoProps {
    todo: Todo;
    onSave: (id: number, newName: string) => Promise<void> | void;
    onCancel: () => void;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo, onSave, onCancel }) => {
    const [tempName, setTempname] = useState<string>(todo.todo_name);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (tempName.trim() && tempName !== todo.todo_name) {
            onSave(todo.id, tempName);
        } else {
            onCancel();
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
            <input 
                type="text"
                value={tempName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTempname(e.target.value)}
                onBlur={onCancel}
                autoFocus
            />
        </form>
    )
}

export default EditTodo;