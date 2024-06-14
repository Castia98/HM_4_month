import React from 'react';

const Button = ({text, action}) => {
    console.log(text, 'props')
    return (
        <button onClick={action}>{text}</button>
    );
};

export default Button;