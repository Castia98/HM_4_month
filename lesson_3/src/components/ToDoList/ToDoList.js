import React from 'react';
import classes from "./ToDoList.module.css";
import Todo from '../todo/Todo'

const ToDoList = ({list, handleDelete}) => {
    return (
        <ul className={classes.todo_list}>
            {
                list.map(item => <Todo key={item.id} todo={item} handleDelete={handleDelete}/>)
            }
        </ul>
    );
};

export default ToDoList;