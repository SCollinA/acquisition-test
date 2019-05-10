import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'
import { statusTypes } from '../../Tracker'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editTarget, editingTarget }) => (
                <fieldset 
                    onChange={({ target }) => {
                        editTarget({
                            ...editingTarget,
                            status: target.value
                        })
                    }}
                >
                    <legend>Target Status</legend>
                    <label>
                        Researching
                        <input 
                            type='radio'
                            name='status'
                            value='researching'
                            defaultChecked={editingTarget.status === statusTypes[0]}
                        />
                    </label>
                    <label>
                        Pending approval
                        <input 
                            type='radio'
                            name='status'
                            value='pending approval'
                            defaultChecked={editingTarget.status === statusTypes[1]}
                        />
                    </label>
                    <label>
                        Approved
                        <input 
                            type='radio'
                            name='status'
                            value='approved'
                            defaultChecked={editingTarget.status === statusTypes[2]}
                        />
                    </label>
                    <label>
                        Denied
                        <input 
                            type='radio'
                            name='status'
                            value='denied'
                            defaultChecked={editingTarget.status === statusTypes[3]}
                        />
                    </label>
                </fieldset>
                                        
            )}
        </TrackerContext.Consumer>
    )
}