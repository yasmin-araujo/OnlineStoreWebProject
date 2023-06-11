import React from 'react'
import './style.css'


const Coluna = ({ valores }) => {

    return <>
        <div className='col-container'>
            {valores.map((valor) => (
                <div className='col'>{valor}</div>
            ))}
        </div>
    </>
}

export default Coluna