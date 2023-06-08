import React from 'react'
import './style.css'

const Input = ({ placeholder, type, setInputData }) => {


    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    return <>

        <input onChange={handleInputChange} type={type} className="input" placeholder={placeholder}></input>
    </>

}

export default Input 