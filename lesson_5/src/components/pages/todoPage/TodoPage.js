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
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

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
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setInputTask('');

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleDone = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleEdit = (updatedTask) => {
        const updatedTasks = tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
        );
        setTasks(updatedTasks);
        setCurrentEditId(null);


        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleCurrentEdit = (id) => {
        setCurrentEditId(id);
    };

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const searchTask = () => {
        if (!Array.isArray(tasks)) return [];
        return tasks.filter(task => task.title.match(regex)) || []
    };

    const filterTasks = () => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'notCompleted':
                return tasks.filter(task => !task.completed);
            case 'all':
            default:
                return tasks;
        }
    };

    const BASE_URL = 'https://jsonplaceholder.typicode.com/';
    const API ='todos';
    const limit = 10;
    const [offset, setOffset] = useState(0);

    const getApi = async () => {
        const response = await fetch (`${BASE_URL}${API}/?_limit=${limit}&_start=${offset}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        getApi().then((data) => {
            setTasks(data);

            localStorage.setItem('tasks', JSON.stringify(data));
        });
    }, [offset]);

    const page = Math.floor(offset / limit) + 1;

    const handlePrev = () => {
        setOffset(prev => prev - limit);
    };

    const handleNext = () => {
        setOffset(prev => prev + limit);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

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
            <select value={filter} onChange={handleFilterChange}>
                <option value="all">All Tasks</option>
                <option value="completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            <Button action={handleClearAllTasks} text={'Clear All Tasks'}/>
            <ToDoList
                list={filterTasks()}
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
