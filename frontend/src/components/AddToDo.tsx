import { useState } from "react";

interface AddTodoProps {
    addTodo: (todo_name: string) => Promise<void> | void;
};

const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {

    const [input, setInput] = useState<string>('');

    const handleAdd = async () => {
        if (input.trim() === '') return;

        await addTodo(input);
        setInput('');
    };

    return (
        <div className="add-todo">
            <input value={input} 
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
                   onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') handleAdd();
                   }}

                   className="add-input" type='text'
                   placeholder="Digite sua tarefa:"
                />
            <button onClick={handleAdd} className="add-button" disabled={!input.trim()}>Add Todo</button>
        </div>
    );
}

export default AddTodo;