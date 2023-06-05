import React from 'react'
import './style.css'
import { TextField } from '@mui/material';

const Input = ({ placeholder, type, setInputData }) => {

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    return <>
        <TextField onChange={handleInputChange} className='input' label={placeholder} variant='outlined' margin='normal' type={type} />
    </>

}

export default Input 