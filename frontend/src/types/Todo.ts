export interface Todo {
  id: number;
  todo_name: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface TodoCreateInput {
  todo_name: string;
  completed?: boolean;
}