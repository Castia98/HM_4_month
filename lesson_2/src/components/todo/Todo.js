import React from 'react';
import classes from "./todo.module.css";

const Todo = ({todo}) => {
    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed ? 'done' : 'not done'}</p>
        </li>
    );
};

export default Todo;