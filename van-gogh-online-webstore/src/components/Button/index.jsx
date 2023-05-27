import React from 'react'
import './style.css'

const Button = ({children, backgroundcolor, onClick}) => {


    return <>

        <button onClick={onClick} className='button' style={{background: backgroundcolor}} >
            {children}
        </button>
    </>

}

export default Button