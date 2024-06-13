import React from 'react';

const Button = ({text}) => {
    console.log(text, 'props')
    return (
        <button>{text}</button>
    );
};

export default Button;