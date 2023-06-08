import React from 'react'
import './style.css'

export default function Button({ children, onClick, styles }) {
    return (
        <button onClick={onClick} className='button' style={styles} >
            {children}
        </button>
    );
};  