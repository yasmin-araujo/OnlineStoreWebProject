import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Input from '../../components/TextInput'
import Button from '../../components/Button'



const SignUp = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#A1C1AA'
    }, [])

    const [inputData1, setInputData1] = useState('')
    const [inputData2, setInputData2] = useState('')
    const [inputData3, setInputData3] = useState('')
    const [inputData4, setInputData4] = useState('')
    const [inputData5, setInputData5] = useState('')
    const [inputData6, setInputData6] = useState('')

    const onClick = () => {

        console.log(inputData1);
        console.log(inputData2);
        console.log(inputData3);
        console.log(inputData4);
        console.log(inputData5);
        console.log(inputData6);

    }

    return <>
        <Navbar /><br /><br /><br />

        <div>
            <div className='meio'>
                <div className='signup'>
                    <span >Sign Up</span>
                </div>
                <div>

                    <Input setInputData={setInputData1} placeholder={"Name"} type={"text"} />
                    <Input setInputData={setInputData2} placeholder={"Email"} type={"email"} />
                    <Input setInputData={setInputData3} placeholder={"Adress"} type={"text"} />
                    <Input setInputData={setInputData4} placeholder={"Telephone"} type={"tel"} />
                    <Input setInputData={setInputData5} placeholder={"Password"} type={"password"} />
                    <Input setInputData={setInputData6} placeholder={"Confirm Password"} type={"password"} />

                </div><br />

                <Button onClick={onClick} backgroundcolor="#A1C1AA">SIGN UP</Button>


            </div>
        </div>


    </>
}

export default SignUp
