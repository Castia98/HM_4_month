import React, {useState} from 'react';
import classes from "./todo.module.css";
import Button from "../Button";
import Input from "../input/Input";

const Todo = ({todo, handleDelete,handleDone,handleEdit, handleCurrentEdit, isEdit}) => {
    const [input, setInput] = useState(todo.title)

    return (
        <>
            <li className={`${classes.todo} ${todo.completed ? classes.completed : ''}`}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <p>completed: {todo.completed ? 'done' : 'not done'}</p>
                <Button text={'edit'} action={()=> handleCurrentEdit(todo.id)}/>
                <Button text={'done'} action={()=> handleDone(todo.id)}/>
                <Button text={'delete'} action={()=> handleDelete(todo.id)}/>
            </li>
            {
                isEdit && <div>
                    <Input
                        onChange={event => setInput(event.target.value)}
                        placeholder={'Enter new name'}
                        value = {input}
                    />
                    <Button action={()=>{
                        handleEdit({
                            ...todo, title: input
                        });
                        handleCurrentEdit(null);
                    }} text={'Save'}/>
                    <Button action={()=>{
                        handleCurrentEdit(null)
                        setInput(todo.title);
                    }} text={'Cancel'}/>
                </div>
            }
        </>
    );
};

export default Todo;