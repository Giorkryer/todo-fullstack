import Todo from "./Todo"
import EditTodo from "./EditToDo"
import { Todo as TodoType } from "../types/Todo"

interface TodoListProps {
    todos: TodoType[];
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newName: string) => Promise<void> | void;
    editingId: number | null;
    setEditingId: (id: number | null) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo, editingId, setEditingId }) => {

    return (
        <div className="todo-list">
            {
                todos.map((todo) => {
                    if (editingId === todo.id) {
                        return (
                            <EditTodo 
                                key={todo.id}
                                todo={todo} 
                                onSave={editTodo} 
                                onCancel={() => setEditingId(null)} 
                            />
                        )
                    }
                    return (
                        <Todo 
                            key={todo.id} 
                            id={todo.id} 
                            todo_name={todo.todo_name} 
                            completed={todo.completed} 
                            deleteTodo={deleteTodo}
                            setEditingId={setEditingId} 
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList