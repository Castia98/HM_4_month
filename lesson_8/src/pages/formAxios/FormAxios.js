import React from 'react';
import { useForm } from "react-hook-form";
import classes from "./formAxios.module.css";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { postAxios } from "../fetch/Fetch";

export const scheme = Yup.object().shape({
    id: Yup.string().trim().required('Mandatory field').min(1, 'Minimum 1 symbols required').max(30, 'Maximum 30 symbols'),
    surname: Yup.string().trim().required('Mandatory field').min(3, 'Minimum 3 symbols required').max(30, 'Maximum 30 symbols'),
    name: Yup.string().trim().required('Mandatory field').min(3, 'Minimum 3 symbols required').max(30, 'Maximum 30 symbols'),
    groupId: Yup.string().trim().required('Mandatory field').min(1, 'Minimum 1 symbols required').max(30, 'Maximum 30 symbols'),
});

const FormAxios = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(scheme)
    });

    const submit = (data) => {
        postAxios('student', data);
        console.log(data);
    };
    const error = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input
                className={`${classes.input} ${errors.id ? classes.inputError : ''}`}
                type='text'
                aria-invalid={errors.id ? true : false}
                {...register('id')}
            />
            <p>{errors.id?.message}</p>
            <input
                className={`${classes.input} ${errors.name ? classes.inputError : ''}`}
                type='text'
                aria-invalid={errors.name ? true : false}
                {...register('name')}
            />
            <p>{errors.name?.message}</p>
            <input
                className={`${classes.input} ${errors.surname ? classes.inputError : ''}`}
                type='text'
                aria-invalid={errors.surname ? true : false}
                {...register('surname')}
            />
            <p>{errors.surname?.message}</p>
            <input
                className={`${classes.input} ${errors.groupId ? classes.inputError : ''}`}
                type='text'
                aria-invalid={errors.groupId ? true : false}
                {...register('groupId')}
            />
            <p>{errors.groupId?.message}</p>
            <button>send</button>
        </form>
    );
};

export default FormAxios;