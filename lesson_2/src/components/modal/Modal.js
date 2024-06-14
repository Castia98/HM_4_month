import React from 'react';
import classes from "./modal.module.css";
import Button from "../Button";

const Modal = ({children, action}) => {
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.ModalContent}>
                <Button action={action} text={'Close'}/>
                {children}
            </div>
        </>
    );
};

export default Modal;