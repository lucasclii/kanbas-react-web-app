import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo }: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <li key={todo.id} className="list-group-item w-50">
            {todo.title}
            <button className="btn btn-danger float-end ms-2" onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete </button>
            <button className="btn btn-primary float-end" onClick={() => dispatch(setTodo(todo))}>
                Edit </button>
        </li>
    );
}
export default TodoItem;