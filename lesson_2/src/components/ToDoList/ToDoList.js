import React from 'react';
import classes from "./ToDoList.module.css";
import Todo from '../todo/Todo'

const ToDoList = ({list}) => {
    return (
        <ul className={classes.todo_list}>
            {
                list.map(item => <Todo todo={item}/>)
            }
        </ul>
    );
};

export default ToDoList;