import React from 'react';
import classes from "./modal.module.css";

const Modal = ({children, action}) => {
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.ModalContent}>
                <button onClick={action}>close</button>
                {children}
            </div>
        </>
    );
};

export default Modal;