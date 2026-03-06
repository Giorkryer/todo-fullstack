import axios from 'axios';
import { Todo } from '../types/Todo'

const BASE_URL = 'http://localhost:3000/api/'
const GET_URL = `${BASE_URL}todos`
const POST_URL = `${BASE_URL}todos`
const DELETE_URL = (id: number): string => `${BASE_URL}todos/${id}`
const UPDATE_URL = (id: number): string => `${BASE_URL}todos/${id}/update_completed`
const EDIT_URL = (id: number): string => `${BASE_URL}todos/${id}`

export const get_todos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(GET_URL);
    return response.data;
}

export const create_todo = async (todo_name: string): Promise<Todo> => {
    const response = await axios.post<Todo>(POST_URL, { 
        todo: { todo_name: todo_name,
                completed: false } 
    });
    return response.data;
}

export const delete_todo = async (id: number): Promise<void> => {
    const response = await axios.delete(DELETE_URL(id));
}

export const update_todo = async (id: number, completed: boolean): Promise<Todo> => {
    const response = await axios.patch(UPDATE_URL(id), { 
        todo: { completed: completed } 
    });
    return response.data;
}

export const edit_todo = async (id: number, todo_name: string): Promise<Todo> => {
    const { data } = await axios.patch(EDIT_URL(id), {
        todo: { todo_name: todo_name }
    })
    return data;
}