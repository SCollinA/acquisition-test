import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <div className='CompanyInfoEdit'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        name='name'
                        id='name'
                        value={editingTarget.info.name}
                        onChange={({ target }) => {
                            editTarget({
                                ...editingTarget,
                                info: {
                                    ...editingTarget.info,
                                    name: target.value,
                                }
                            })
                        }}
                    />
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text' 
                        name='address'
                        id='address'
                        value={editingTarget.info.address}
                        onChange={({ target }) => {
                            editTarget({
                                ...editingTarget,
                                info: {
                                    ...editingTarget.info,
                                    address: target.value,
                                }
                            })
                        }}
                    />
                    <label htmlFor='employeesCount'>Employees Count</label>
                    <input 
                        type='number' 
                        name='employeesCount'
                        id='employeesCount'
                        value={editingTarget.info.employeesCount}
                        onChange={({ target }) => {
                            editTarget({
                                ...editingTarget,
                                info: {
                                    ...editingTarget.info,
                                    employeesCount: target.value,
                                }
                            })
                        }}
                    />
                    <label htmlFor='foundedDate'>Founded Date</label>
                    <input 
                        type='text' 
                        name='foundedDate'
                        id='foundedDate'
                        value={editingTarget.info.foundedDate}
                        onChange={({ target }) => {
                            editTarget({
                                ...editingTarget,
                                info: {
                                    ...editingTarget.info,
                                    foundedDate: target.value,
                                }
                            })
                        }}
                    />
                    <label htmlFor='isPublic'>Public Company</label>
                    <input 
                        type='checkbox' 
                        name='isPublic'
                        id='isPublic'
                        checked={editingTarget.info.isPublic}
                        onChange={({ target }) => {
                            editTarget({
                                ...editingTarget,
                                info: {
                                    ...editingTarget.info,
                                    isPublic: target.checked,
                                }
                            })
                        }}
                    />
                </div>            
            )}
        </TrackerContext.Consumer>
    )
}