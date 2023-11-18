import React from "react";
import { Todo } from "../../../../typings";
type PageProps = {
  params: {
    todoId: string;
  };
};
//? Function to fetch
const fetchTodo = async (todoId: string) => {
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  let todo: Todo = await res.json();
  return todo;
};
const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p> #{todo.id}: {todo.title}</p>
      <p className=''> Completed : {todo.completed ? "Yes" : "NO"}</p>
      <p className="border-t border-black mt-5 text-right">By User : {todo.userId}</p>
    </div>
  );
};

export default TodoPage;


