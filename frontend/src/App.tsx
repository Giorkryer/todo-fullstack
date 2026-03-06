import './App.css';

import { useState, useEffect } from 'react';

import { get_todos, create_todo, delete_todo, edit_todo } from './api/endpoints'
import { Todo as TodoType } from './types/Todo'

import TodoList from './components/TodoList';
import AddTodo from './components/AddToDo';

function App() {

  const [todos, setTodos] = useState<TodoType[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() =>{
    const fetchTodos = async () => {
      const todos = await get_todos();
      setTodos(todos);
    }
    fetchTodos();
  }, [])

  const addTodo = async (todo_name: string): Promise<void> => {
    const todo = await create_todo(todo_name);
    setTodos([todo, ...todos])
  }

  const deleteTodo = async (id: number): Promise<void> => {
    delete_todo(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = async (id: number, newTitle: string): Promise<void> => {
    try{
      const updatedItem = await edit_todo(id, newTitle);
      setTodos(prev =>
        prev.map((todo) => (todo.id === id ? updatedItem : todo))
      );
      setEditingId(null);
      } catch (error) {

      }
  };


  return (
    <div className="App">
      <div className='app-container'>
        <h1 className='title'>Todo App</h1>
        <AddTodo addTodo ={addTodo} />
        <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editingId={editingId}
        setEditingId={setEditingId}
         />
      </div>
    </div>
  );
}

export default App;
