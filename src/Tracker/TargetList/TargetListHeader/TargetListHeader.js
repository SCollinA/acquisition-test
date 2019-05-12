import React from 'react'
import './TargetListHeader.css'

export default () => {
    return (
        <header className='TargetListHeader'>
            <h4>Name</h4>
            <h4> | </h4>
            <h4>Primary Contact</h4>
            <h4> | </h4>
            <h4>Status</h4>
        </header>
    )
}