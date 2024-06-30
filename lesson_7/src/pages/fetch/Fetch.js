import React, {useEffect, useState} from 'react';
import classes from "./fetch.module.css";
import axios from 'axios'
const BASE_URL = 'http://localhost:5000/'

export const postAxios = async (API,student) => {
    console.log(student)
    const {id, name, surname, groupId} = student
    const response = await axios.post(`${BASE_URL}${API}`, {
        id, name, surname, groupId
    });
    const data = response.data
    console.log(data,'postAxios');
}

const Fetch = () => {
    const [students, setStudents] =useState([])
    console.log(students);
    const[refresh, setRefresh] = useState(false)


    const getApi = async (API) => {
    const response = await fetch(`${BASE_URL}${API}`)
        const data = await response.json();
        return data
    }
    const postApi = async (API) => {
    await fetch(`${BASE_URL}${API}`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({surname: 'Kushimova', name:'Karina', id:'6', groupId:23})
    }).then(response => response.json()).then(data=> console.log(data)).catch(error=>console.error(error))
    }
    const patchApi = async (API,id) => {
    await fetch(`${BASE_URL}${API}/${id}`, {
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({surname: 'Shaidullaev'})
    }).then(response => response.json()).then(data => console.log(data)).catch(error=>console.error(error))
    }
    const deleteApi = async (API,id) => {
        await fetch(`${BASE_URL}${API}/${id}`, {
            method:"DELETE"

        }).then(response => response.json()).then(data=> {console.log(data)
        setRefresh(prev => !prev)
        }).catch(error=>console.error(error))
    }

    const getAxios =async (API) => {
        const response = await axios(`${BASE_URL}${API}`)
        const data = response.data
        console.log(data)
    }

    useEffect(() => {
        getApi('student').then(data=>setStudents(data))
    }, [refresh]);


    return (
        <div className={classes.wrapper}>
            <button className={classes.btn} onClick={()=> getApi('student').then(data=>setStudents(data))}>getApi</button>
            <button className={classes.btn} onClick={()=> getAxios('student')}>getAxios</button>
            <button className={classes.btn} onClick={()=> postApi('student')}>postApi</button>
            <button className={classes.btn} onClick={()=> postAxios('student')}>postAxios</button>
            <button className={classes.btn} onClick={()=> patchApi('student', '1')}>patchApi</button>
            <button className={classes.btn} onClick={()=> deleteApi('student', '5')}>deleteApi</button>
            {
                students.map(student => <div key={student.id}>
                    <p>{student.id} {student.name}</p> <button className={classes.btn} onClick={()=> deleteApi('student', student.id)}>delete</button>
                </div>  )
            }
        </div>
    );
};

export default Fetch;