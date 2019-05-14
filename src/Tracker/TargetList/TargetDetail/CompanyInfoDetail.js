import React from 'react'

export default ({ target }) => {
    return (
        <div className='CompanyInfoDetail'>
            <h4>{target.info.name || 'No Name'}</h4>
            <h4>{target.info.address || 'No Address'}</h4>
            <h4>
                {`${target.info.employeesCount.toLocaleString()} `}
                Employee{target.info.employeesCount > 1 && 's'}
            </h4>
            <h4>{target.info.foundedDate && 
                `Founded ${new Date(target.info.foundedDate).toLocaleDateString()}`}</h4>
            <h4>{target.info.isPublic && 'Publicly Traded'}</h4>
        </div>
    )
}