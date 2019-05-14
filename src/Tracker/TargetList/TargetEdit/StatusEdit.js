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
                            value='Researching'
                            defaultChecked={editingTarget.status === statusTypes[2]}
                        />
                        Researching
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='Pending approval'
                            defaultChecked={editingTarget.status === statusTypes[1]}
                        />
                        Pending approval
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='Approved'
                            defaultChecked={editingTarget.status === statusTypes[0]}
                        />
                        Approved
                    </label>
                    <label>
                        <input 
                            type='radio'
                            name='status'
                            value='Denied'
                            defaultChecked={editingTarget.status === statusTypes[3]}
                        />
                        Denied
                    </label>
                </fieldset>
                                        
            )}
        </TrackerContext.Consumer>
    )
}