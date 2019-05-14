import React from 'react'

export default ({ target }) => {
    return (
        <div className='CompanyInfoDetail'>
            <h4>{target.info.name || 'No Name'}</h4>
            <h4>{target.info.address || 'No Address'}</h4>
            {target.info.employeesCount &&
                <h4>
                    {target.info.employeesCount.toLocaleString()} Employee{target.info.employeesCount > 1 && 's'}
                </h4>}
            {target.info.foundedDate && 
                <h4>
                    Founded {new Date(target.info.foundedDate).toLocaleDateString()}
                </h4>}
            {target.info.isPublic && 
                <h4>
                    Publicly Traded
                </h4>}
        </div>
    )
}