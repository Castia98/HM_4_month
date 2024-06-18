import React from 'react';
import classes from "./ToDoList.module.css";
import Todo from '../todo/Todo'

const ToDoList = ({list}) => {
    console.log(list);
    return (
        <ul>
            {list.map(item => (
                <Todo key={item.id} todo={item} />
            ))}
        </ul>
    );
};

export default ToDoList;