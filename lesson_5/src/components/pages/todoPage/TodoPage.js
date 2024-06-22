import React, { useEffect, useState } from 'react';
import Input from "../../input/Input";
import Button from "../../Button";
import Modal from "../../modal/Modal";
import ToDoList from "../../ToDoList/ToDoList";
import Pagination from "../../pagination/Pagination";

const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [regex, setRegex] = useState('');
    const [tasks, setTasks] = useState([]);
    const [currentEditId, setCurrentEditId] = useState(null);

    const handleShow = () => {
        setShow(prevState => !prevState);
    };

    const handleChangeSearch = (event) => {
        setRegex(event.target.value);
    };

    const handleChangeTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        if (inputTask.trim() === '') return;
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = {
            id: newId,
            title: inputTask,
            completed: false
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setInputTask('');
    };

    const handleDone = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleEdit = (updatedTask) => {
        setTasks(prevTasks => prevTasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        ));
        setCurrentEditId(null);
    };

    const handleCurrentEdit = (id) => {
        setCurrentEditId(id);
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const searchTask = () => {
        if (!Array.isArray(tasks)) return [];
        return tasks.filter(task => task.title.match(regex)) || []
    };

    const filterTasks = searchTask();


    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const API ='todos'
    const limit = 10
    const [offset,setOffset] = useState(0)
    const getApi = async() => {
        const response = await fetch (`${BASE_URL}${API}/?_limit=${limit}&_start=${offset}`)
        console.log(response);
        const data = await response.json()
        console.log(data)
        return data
    }
    useEffect(() => {
        getApi().then((data) => setTasks(data))
    }, [offset]);


    const page = Math.floor(offset/limit) +1
    console.log(page)
    const handlePrev =() => {
        return setOffset(prev => prev-limit)
    }
    const handleNext =() => {
        return setOffset(prev => prev+limit)
    }
    return (
        <div>


            <Input onChange={handleChangeSearch} placeholder={'search'}/>
            <Button action={handleShow} text={'open modal'}/>
            {
                show && <Modal
                    handleShow={handleShow}
                    handleChangeTask={handleChangeTask}
                    handleAdd={handleAdd}
                />
            }
            <ToDoList
                list={filterTasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                handleCurrentEdit={handleCurrentEdit}
                currentEditId={currentEditId}
            />
            <Pagination prev={handlePrev} next={handleNext} page={page}/>
        </div>
    );
};

export default TodoPage;