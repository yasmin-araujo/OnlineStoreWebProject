import React from 'react'
import './style.css'

const Button = ({ children, backgroundcolor, onClick, size }) => {

    return <>
        <button onClick={onClick} className='button' style={{ background: backgroundcolor, fontSize: size }} >
            {children}
        </button>
    </>

}

export default Button