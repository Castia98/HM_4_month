import React from 'react';

const User = (props) => {
    console.log(props)
    const {name, age, phone} = props
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;