import React from 'react'
import './style.css'


const Coluna = ({ valores }) => {

    return <>
        <div className='col-container'>
            <div className='col'>{valores[0]}</div>
            <div className='col'>{valores[1]}</div>
            <div className='col'>{valores[2]}</div>
            <div className='col'>{valores[3]}</div>
            <div className='col'>{valores[4]}</div>
            <div className='col'>{valores[5]}</div>
        </div>
    </>
}

export default Coluna