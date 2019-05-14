import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset className='CompanyInfoEdit'>
                    <legend>Company Info</legend>
                    <label htmlFor='name'>
                        Name
                        <input 
                            type='text' 
                            name='name'
                            id='name'
                            placeholder='target name'
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
                    </label>
                    <label htmlFor='address'>
                        Address
                        <input
                            type='text' 
                            name='address'
                            id='address'
                            placeholder='target address'
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
                    </label>
                    <label htmlFor='employeesCount'>
                        Employees Count: {editingTarget.info.employeesCount.toLocaleString()}
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
                    </label>
                    <label htmlFor='foundedDate'>
                        Founded Date: {new Date(editingTarget.info.foundedDate).toLocaleDateString()}
                        <input 
                            type='text' 
                            name='foundedDate'
                            id='foundedDate'
                            placeholder='date founded'
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
                    </label>
                    <label htmlFor='isPublic'>
                        Public Company
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
                    </label>
                </fieldset>            
            )}
        </TrackerContext.Consumer>
    )
}