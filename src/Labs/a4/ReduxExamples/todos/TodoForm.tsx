import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

function TodoForm() {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
    <li className="list-group-item w-50">       
        <input
            value={todo.title}
            onChange={(e) =>
                dispatch(setTodo({
                    ...todo,
                    title: e.target.value
                }))
            }
        />
        <button className="btn btn-success float-end ms-2" onClick={() => dispatch(addTodo(todo))}>Add</button>
        <button className="btn btn-warning float-end" onClick={() => dispatch(updateTodo(todo))}>
            Update </button>
    </li>
    );
}
export default TodoForm;