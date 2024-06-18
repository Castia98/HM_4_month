import React, {useState} from 'react';
import Button from "../../Button";
import User from "../../user/user";
import Wellcome from "../../Wellcome";
import Content from "../../content/content";
import Example from "../../example/Example";
import Modal from "../../modal/Modal";
import Input from "../../input/Input";
import ToDoList from "../../ToDoList/ToDoList";

const Main = () => {
    // let show = true;
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputTask,setInputTask] = useState('')
    const [tasks, setTasks] = useState([
        // {
        //     id: 1,
        //     title: 'coding',
        //     completed: false
        // },
        // {
        //     id: 2,
        //     title: 'eat',
        //     completed: false
        // },
        // {
        //     id: 3,
        //     title: 'sleep',
        //     completed: true
        // }
    ])
    console.log(tasks)
    const handleShow = () => {
        setShow(prevState => !prevState)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    }
    const handleChangeTask = (event) => {
        console.log(event.target.value)
        setInputTask(event.target.value)
    }
    const handleAdd = () => {
        console.log('add')
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = {
            id: newId,
            title: inputTask,
            completed: false
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setInputTask('');
    }

    const handleDelete = (id) => {
        console.log(id)
    }
    return (
        <div>
            {/*<h1>hello</h1>*/}
            <ToDoList list={tasks} handleDelete={handleDelete}/>
            {/*<User name = {'Rin'} age={26} phone={4544854646268}/>*/}
            {/*<Wellcome title={"Welcome to our website!"} message={"Thank you for visiting. We hope you enjoy your stay."}/>*/}
            {/*<Content text={'Rin'} number = {7} boolean={true}/>*/}
            {/*<Example>*/}
            {/*    <p style={{color:"darkblue"}}>Karina</p>*/}
            {/*</Example>*/}
            <Button action={handleShow} text={'open modal'}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    handleChangeTask={handleChangeTask}
                    handleAdd={handleAdd}/>
            }
            <p>{inputTask}</p>
            {/*<Input placeholder={'write a text'} onChange={handleChange} type={'password'}/>*/}
            {/*<h1 style={{fontSize: '20px', color: 'red' }}>{inputValue}</h1>*/}
        </div>
    );
};

export default Main;