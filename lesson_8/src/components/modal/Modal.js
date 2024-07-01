import React from 'react';
import classes from "./modal.module.css";
import Button from "../Button";
import Input from "../input/Input";

const Modal = ({handleShow,handleChangeTask, handleAdd}) => {
    return (
        <>
            <div className={classes.modalWrapper} onClick={handleShow}/>
            <div className={classes.ModalContent}>
                <Button action={handleShow} text={'Close'}/>
                <Input onChange={handleChangeTask} placeholder={"Enter task's name"}/>
                <Button action={handleAdd} text={'add'}/>
            </div>
        </>
    );
};

export default Modal;