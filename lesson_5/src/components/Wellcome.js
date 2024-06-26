import React from 'react';

const WelcomeMessage = ({ title, message }) => {
    console.log('Props:', { title, message });
    return (
        <div>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default WelcomeMessage;







