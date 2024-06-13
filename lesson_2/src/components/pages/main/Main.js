import React, {useState} from 'react';
import Button from "../../Button";
import User from "../../user/user";
import Wellcome from "../../Wellcome";
import Content from "../../content/content";
import Example from "../../example/Example";
import Modal from "../../modal/Modal";
import Input from "../../input/Input";

const Main = () => {
    // let show = true;
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    console.log(show, 'show')
    const handleShow = () => {
        setShow(!show)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
    }
    return (
        <div>
            <h1>hello</h1>
            <User name = {'Rin'} age={26} phone={4544854646268}/>
            <Wellcome title={"Welcome to our website!"} message={"Thank you for visiting. We hope you enjoy your stay."}/>
            <Content text={'Rin'} number = {7} boolean={true}/>
            <Example>
                <p style={{color:"darkblue"}}>Karina</p>
            </Example>
            <button onClick={handleShow}>open modal</button>
            {
                show && <Modal action ={handleShow}>
                    content
                </Modal>
            }
            <Input placeholder={'write a text'} onChange={handleChange} type={'password'}/>
            <h1 style={{fontSize: '20px', color: 'red' }}>{inputValue}</h1>
        </div>
    );
};

export default Main;