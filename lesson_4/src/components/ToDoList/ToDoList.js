import React, {useState} from 'react';
import classes from "./ToDoList.module.css";
import Todo from '../todo/Todo'

const ToDoList = ({list, handleDelete,handleDone, handleEdit, handleCurrentEdit, currentEditId}) => {
    const [currentEdit, setCurrentEdit] = useState('')
    return (
        <ul className={classes.todo_list}>
            {
                list.map(item => <Todo
                    key={item.id}
                    todo={item}
                    handleDelete={handleDelete}
                    handleDone ={handleDone}
                    handleEdit={handleEdit}
                    handleCurrentEdit={setCurrentEdit}
                    isEdit={currentEdit === item.id}
                />)
            }
        </ul>
    );
};

export default ToDoList;