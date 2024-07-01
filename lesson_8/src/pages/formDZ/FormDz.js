import React from 'react';
import { useForm } from "react-hook-form";
import classes from "./formDz.module.css";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const regExpPassword = new RegExp(/(?=.*\d)(?=.*[A-Z])/);
const regExpEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export const scheme = Yup.object().shape({
    name: Yup.string().trim().required('Mandatory field').min(3, 'Minimum 3 symbols required').max(30, 'Maximum 30 symbols'),
    email: Yup.string().trim().required('Mandatory field').matches(regExpEmail, 'Invalid Email'),
    password: Yup.string().trim().required('Mandatory field').min(8, 'Minimum 8 symbols').matches(regExpPassword, 'Password must contain at least one digit and one uppercase letter'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const FormDz = () => {
    const { register,
        handleSubmit,
        formState: {errors}
    }= useForm({
        resolver: yupResolver(scheme)
    });

    const submit = (data) => {
        console.log(data);
    };
    const error = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input
                className={classes.input}
                type='text'
                aria-invalid={errors.name ? true : false}
                {...register('name')}
                placeholder="Name"
            />
            <p>{errors.name?.message}</p>

            <input
                className={classes.input}
                type='email'
                aria-invalid={errors.email ? true : false}
                {...register('email')}
                placeholder="Email"
            />
            <p>{errors.email?.message}</p>

            <input
                className={classes.input}
                type='password'
                aria-invalid={errors.password ? true : false}
                {...register('password')}
                placeholder="Password"
            />
            <p>{errors.password?.message}</p>

            <input
                className={classes.input}
                type='password'
                aria-invalid={errors.confirmPassword ? true : false}
                {...register('confirmPassword')}
                placeholder="Confirm Password"
            />
            <p>{errors.confirmPassword?.message}</p>

            <button>send</button>
        </form>
    );
};

export default FormDz;