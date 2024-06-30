import React from 'react';
import classes from './user.module.css';

const User = (props) => {
    console.log(props)
    const {name, age, phone} = props
    return (
        <div>
            <p className={classes.content}>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;