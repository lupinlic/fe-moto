import React from 'react'

const Bt = ({ name }) => {
    return (
        <div className="bt d-flex align-items-center justify-content-center" style={{ borderRadius: '20px', padding: '8px', background: '#fff', color: 'red' }}>
            <p className='m-0'>{name}</p>
        </div>
    )
}

export default Bt