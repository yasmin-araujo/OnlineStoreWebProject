import React from 'react'
import './style.css'

const Button = ({ children, backgroundcolor, onClick, size, height }) => {

    return <>
        <button onClick={onClick} className='button' style={{ background: backgroundcolor, fontSize: size, height: height }} >
            {children}
        </button>
    </>

}

export default Button