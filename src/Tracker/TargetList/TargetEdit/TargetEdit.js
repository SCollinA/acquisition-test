import React from 'react'
import './TargetEdit.css'
import TrackerContext from '../../../Context/TrackerContext'
import { statusTypes } from '../../Tracker'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ 
                targets,
                editingTarget, 
                editTarget, 
                saveTarget, 
                deleteTarget 
            }) => (
                <div 
                    className='targetEditWrapper'
                    onClick={() => editTarget({})}
                >
                    <form
                        className='TargetEdit'
                        onClick={event => event.stopPropagation()}
                        onSubmit={event => {
                            event.preventDefault()
                            saveTarget()
                        }}
                        onReset={() => editTarget(targets.find(target => target.id === editingTarget.id))}
                    >
                        <input 
                            type='text' 
                            name='name'
                            value={editingTarget.name}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    name: target.value
                                })
                            }}
                        />
                        <fieldset>
                            <legend>Primary Contact</legend>
                            <input 
                                type='text' 
                                name='contactName'
                                value={editingTarget.contacts[0].name}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        contacts: [{
                                            ...editingTarget.contacts[0],
                                            name: target.value
                                        }]
                                    })
                                }}
                            />
                            <input 
                                type='text' 
                                name='contactPhone'
                                value={editingTarget.contacts[0].phoneNumber}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        contacts: [{
                                            ...editingTarget.contacts[0],
                                            phoneNumber: target.value
                                        }]
                                    })
                                }}
                            />
                        </fieldset>
                        <input 
                            type='number'
                            name='keyMetrics'
                            value={editingTarget.keyMetrics.revenue}
                            onChange={({ target }) => {
                                editTarget({
                                    ...editingTarget,
                                    keyMetrics: {
                                        ...editingTarget.keyMetrics,
                                        revenue: target.value
                                    }
                                })
                            }}
                        />
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
                                    checked={editingTarget.status === statusTypes[0]}
                                />
                            </label>
                            <label>
                                Pending approval
                                <input 
                                    type='radio'
                                    name='status'
                                    value='pending approval'
                                    checked={editingTarget.status === statusTypes[1]}
                                />
                            </label>
                            <label>
                                Approved
                                <input 
                                    type='radio'
                                    name='status'
                                    value='approved'
                                    checked={editingTarget.status === statusTypes[2]}
                                />
                            </label>
                            <label>
                                Denied
                                <input 
                                    type='radio'
                                    name='status'
                                    value='denied'
                                    checked={editingTarget.status === statusTypes[3]}
                                />
                            </label>

                        </fieldset>
                        <div>
                            <input type='submit' value='save'/>
                            <input type='reset' value='reset'/>
                            <input type='button' value='cancel'
                                onClick={() => editTarget({})}
                                />
                            <input type='button' value='delete'
                                onClick={() => deleteTarget()}
                            />
                        </div>
                    </form>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}