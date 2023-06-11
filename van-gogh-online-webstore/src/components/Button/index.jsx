import React from 'react'
import './style.css'

export default function Button({ isSubmitForm = false, children, onClick, styles, name }) {
    if (isSubmitForm) {
        return (
            <input type='submit' value={name} className='button' style={styles} />
        );
    } else {
        return (
            <button onClick={onClick} className='button' style={styles} >
                {children}
            </button>
        );
    };
}  
