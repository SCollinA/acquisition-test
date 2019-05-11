import React from 'react'

export default ({ target }) => {
    return (
        <div className='CompanyInfoDetail'>
            <h1>{target.info.name}</h1>
            <h1>{target.info.address}</h1>
            <h1>{target.info.employeesCount}</h1>
            <h1>{target.info.foundedDate}</h1>
            <h1>{target.info.isPublic && 'Publicly Traded'}</h1>
        </div>
    )
}