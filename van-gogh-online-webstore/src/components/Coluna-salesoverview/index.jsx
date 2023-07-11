import React from 'react'
import './style.css'


const Coluna = ({ valores }) => {

    return <>
        <div className='col-container'>
            {valores.map((valor, index) => (
                <div key={'col-admin-table-' + index} className='col'>{valor}</div>
            ))}
        </div>
    </>
}

export default Coluna