import React, {useEffect, useState} from 'react';
import Button from "../../components/Button";
import User from "../../components/user/user";
import Welcome from "../../components/Welcome";
import Content from "../../components/content/content";
import Example from "../../components/example/Example";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import ToDoList from "../../components/ToDoList/ToDoList";

const Main = () => {
    // // let show = true;
    // const [show, setShow] = useState(false)
    // const [inputValue, setInputValue] = useState('');
    // const [inputTask,setInputTask] = useState('');
    // const [regex,setRegex] = useState('');
    // const [tasks, setTasks] = useState([
    //     // {
    //     //     id: 1,
    //     //     title: 'coding',
    //     //     completed: false
    //     // },
    //     // {
    //     //     id: 2,
    //     //     title: 'eat',
    //     //     completed: false
    //     // },
    //     // {
    //     //     id: 3,
    //     //     title: 'sleep',
    //     //     completed: true
    //     // }
    // ])
    // const [currentEditId, setCurrentEditId] = useState(null);
    //
    // console.log(tasks)
    //
    // const handleShow = () => {
    //     setShow(prevState => !prevState)
    // }
    // const handleChangeSearch = (event) => {
    //     console.log(event.target.value)
    //     setRegex(event.target.value)
    // }
    // const handleChangeTask = (event) => {
    //     console.log(event.target.value)
    //     setInputTask(event.target.value)
    // }
    // const handleAdd = () => {
    //     console.log('add')
    //     const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    //     const newTask = {
    //         id: newId,
    //         title: inputTask,
    //         completed: false
    //     };
    //     setTasks(prevTasks => [...prevTasks, newTask]);
    //     setInputTask('');
    // }
    //
    // const handleDone = (id) => {
    //     console.log(id)
    //     tasks.map(task => {
    //         if(task.id===id) {
    //             return task.completed=!task.completed
    //         }
    //     })
    //     setTasks([...tasks])
    // }
    //
    // const handleEdit = (updatedTask) => {
    //     setTasks(prevTasks => prevTasks.map(task =>
    //         task.id === updatedTask.id ? updatedTask : task
    //     ));
    //     setCurrentEditId(null);
    // };
    //
    // const handleCurrentEdit = (id) => {
    //     setCurrentEditId(id);
    // };
    // const handleDelete = (id) => {
    //    setTasks(tasks.filter(task => task.id!==id))
    // }
    //
    // const searchTask = () => {
    //   return tasks.filter(task => task.title.match(regex)) || []
    // }
    // const filterTasks = searchTask()

    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // },[])
    //
    // useEffect(() => {
    //     const tasks = localStorage.getItem('tasks')
    //     console.log(JSON.parse(tasks), 'tasks')
    // }, []);
    //
    // useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('tasks'))
    //     if (myLocalStorage === null) {
    //         return localStorage.setItem('tasks', JSON.stringify(tasks))
    //     }
    //     if (myLocalStorage.length !==0) {
    //         setTasks((myLocalStorage))
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }, [tasks]);

    // const getApi = async() => {
    //     const response = await fetch ('https://jsonplaceholder.typicode.com/todos/?_limit=5&_start=6')
    //     console.log(response);
    //     const data = await response.json()
    //     console.log(data)
    //     return data
    // }
    // useEffect(() => {
    //     getApi().then((data) => setTasks(data))
    // }, []);
    return (
        <div>
            {/*<h1>hello</h1>*/}
            {/*<ToDoList*/}
            {/*    list={filterTasks}*/}
            {/*    handleDelete={handleDelete}*/}
            {/*    handleDone={handleDone}*/}
            {/*    handleEdit={handleEdit}*/}
            {/*    handleCurrentEdit={handleCurrentEdit}*/}
            {/*    currentEditId={currentEditId}*/}
            {/*/>*/}
            {/*/!*<User name = {'Rin'} age={26} phone={4544854646268}/>*!/*/}
            {/*<Wellcome title={"Welcome to our website!"} message={"Thank you for visiting. We hope you enjoy your stay."}/>*/}
            {/*<Content text={'Rin'} number = {7} boolean={true}/>*/}
            {/*<Example>*/}
            {/*    <p style={{color:"darkblue"}}>Karina</p>*/}
            {/*</Example>*/}
            {/*<Input onChange={handleChangeSearch} placeholder={'search'}/>*/}

            {/*<Button action={handleShow} text={'open modal'}/>*/}
            {/*/!*{*!/*/}
            {/*/!*    show && <Modal*!/*/}
            {/*/!*        handleShow={handleShow}*!/*/}
            {/*/!*        handleChangeTask={handleChangeTask}*!/*/}
            {/*/!*        handleAdd={handleAdd}*!/*/}
            {/*/!*    />*!/*/}
            {/*/!*}*!/*/}
            {/*<p>{inputTask}</p>*/}
            {/*<Input placeholder={'write a text'} onChange={handleChange} type={'password'}/>*/}
            {/*<h1 style={{fontSize: '20px', color: 'red' }}>{inputValue}</h1>*/}
        </div>
    );
};

export default Main;