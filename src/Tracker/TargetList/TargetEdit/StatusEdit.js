import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'
import { statusTypes } from '../Target/Target'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset
                    className='StatusEdit'
                    onChange={({ target }) => {
                        editTarget({
                            ...editingTarget,
                            status: target.value
                        })
                    }}
                >
                    <legend>Target Status</legend>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='researching'
                            defaultChecked={editingTarget.status === statusTypes[0]}
                        />
                        Researching
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='pending approval'
                            defaultChecked={editingTarget.status === statusTypes[1]}
                        />
                        Pending approval
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='approved'
                            defaultChecked={editingTarget.status === statusTypes[2]}
                        />
                        Approved
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='denied'
                            defaultChecked={editingTarget.status === statusTypes[3]}
                        />
                        Denied
                    </label>
                </fieldset>
                                        
            )}
        </TrackerContext.Consumer>
    )
}