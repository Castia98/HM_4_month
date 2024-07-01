import React from 'react';
import {Controller, useForm} from "react-hook-form";
import classes from "./form.module.css";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup';
import input from "../../components/input/Input";


const regExpAge = new RegExp(/^[0-9][0-9]?$|^100$/)
export const scheme = Yup.object ().shape({
    name:Yup.string().trim().required('mandatory field').min(2,'min 2 symbols required'),
    name2:Yup.string().trim().required('mandatory field').min(5,'min 5 symbols required'),
    age: Yup.string().required('mandatory field').matches(regExpAge, 'wrong format')
})
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        clearErrors,
        reset,
        setValue,
        watch,
        control
    } = useForm(
        {
            defaultValues:{
                age:26,
                name: 'Rin'
            },
            resolver:yupResolver (scheme)

        }
    )
    const submit = (data) => {
        console.log(data)
    }

    const error = (data) => {
        console.log(data)
    }

    const name = watch('name')

    const isName = () => {
        console.log('called')
        return true
    }

    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <p style={{fontSize:20, color: 'red'}}>{name}</p>
            <Controller name={'name2'}
                        control={control}
                        render={({field}) => (
                            <input{ ...field} type={'text'}/>)
                        }/>
            <input className={classes.input}
                type={'text'}
                aria-invalid={errors.name ? true : false}
                {...register('name',
                    // {required: true,
                    // validate: value => value.length > 4 || 'Text has to be more than 4 symbols'}
                )}/>
            <p>{errors.name?.message}</p>
            <input className={classes.input}
                type={'text'}
                   aria-invalid={errors.age ? true : false}
                   {...register('age'
                       // , {required: true}
                   )}/>
            <p>{errors.age?.message}</p>
            <button>Send</button>
            <button type='button' onClick={()=> clearErrors()}>clear errors</button>
            <button type='button' onClick={()=> setValue('name', 'Vasyliy')}>set name</button>
            <button type='button' onClick={()=> reset({
                age:'',
                name:''
                }
            )}>reset</button>
        </form>
    );
};

export default Form;