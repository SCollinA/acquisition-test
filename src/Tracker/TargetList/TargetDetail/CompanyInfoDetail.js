import React from 'react'

export default ({ target }) => {
    return (
        <div className='CompanyInfoDetail'>
            <h4>{target.info.name}</h4>
            <h4>{target.info.address}</h4>
            <h4>
                {`${target.info.employeesCount} `}
                Employee{target.info.employeesCount > 1 && 's'}
            </h4>
            <h4>Founded {target.info.foundedDate}</h4>
            <h4>{target.info.isPublic && 'Publicly Traded'}</h4>
        </div>
    )
}