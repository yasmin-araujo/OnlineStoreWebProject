import React, { useState, useEffect } from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import Input from '../../components/TextInput'
import Button from '../../components/Button'


const SignIn = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#44627C'
    }, [])

    const [inputData1, setInputData1] = useState('')
    const [inputData2, setInputData2] = useState('')

    const onClick = () => {

        console.log(inputData1);
        console.log(inputData2);

    }

    return <>
        <Navbar /><br /><br /><br />

        <div>
            <div className='meio-signin'>

                <div className='signin'>
                    <span >Sign In</span>
                </div>

                <div>
                    <Input setInputData={setInputData1} placeholder={"Email"} type={"email"} />
                    <Input setInputData={setInputData2} placeholder={"Password"} type={"password"} />
                </div><br />

                <Button onClick={onClick} backgroundcolor="#44627C">SIGN IN</Button>

            </div>
        </div>
    </>
}

export default SignIn
