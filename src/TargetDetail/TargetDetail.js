import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../Context/TrackerContext'
import { statusTypes } from '../Tracker/Tracker'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ 
                targets,
                selectedTarget, 
                selectTarget, 
                editTarget, 
                saveTarget, 
                deleteTarget 
            }) => (
                <div 
                    className='targetDetailWrapper'
                    onClick={() => selectTarget({})}
                >
                    <form
                        className='TargetDetail'
                        onClick={event => event.stopPropagation()}
                        onSubmit={event => {
                            event.preventDefault()
                            saveTarget()
                        }}
                        onReset={() => selectTarget(targets.find(target => target.id === selectedTarget.id))}
                    >
                        <input 
                            type='text' 
                            name='name'
                            value={selectedTarget.name}
                            onChange={({ target }) => {
                                editTarget({
                                    ...selectedTarget,
                                    name: target.value
                                })
                            }}
                        />
                        <fieldset>
                            <legend>Primary Contact</legend>
                            <input 
                                type='text' 
                                name='contactName'
                                value={selectedTarget.contacts[0].name}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...selectedTarget,
                                        contacts: [{
                                            ...selectedTarget.contacts[0],
                                            name: target.value
                                        }]
                                    })
                                }}
                            />
                            <input 
                                type='text' 
                                name='contactPhone'
                                value={selectedTarget.contacts[0].phoneNumber}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...selectedTarget,
                                        contacts: [{
                                            ...selectedTarget.contacts[0],
                                            phoneNumber: target.value
                                        }]
                                    })
                                }}
                            />
                        </fieldset>
                        <input 
                            type='number'
                            name='keyMetrics'
                            value={selectedTarget.keyMetrics.revenue}
                            onChange={({ target }) => {
                                editTarget({
                                    ...selectedTarget,
                                    keyMetrics: {
                                        ...selectedTarget.keyMetrics,
                                        revenue: target.value
                                    }
                                })
                            }}
                        />
                        <fieldset 
                            onChange={({ target }) => {
                                editTarget({
                                    ...selectedTarget,
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
                                    checked={selectedTarget.status === statusTypes[0]}
                                />
                            </label>
                            <label>
                                Pending approval
                                <input 
                                    type='radio'
                                    name='status'
                                    value='pending approval'
                                    checked={selectedTarget.status === statusTypes[1]}
                                />
                            </label>
                            <label>
                                Approved
                                <input 
                                    type='radio'
                                    name='status'
                                    value='approved'
                                    checked={selectedTarget.status === statusTypes[2]}
                                />
                            </label>
                            <label>
                                Denied
                                <input 
                                    type='radio'
                                    name='status'
                                    value='denied'
                                    checked={selectedTarget.status === statusTypes[3]}
                                />
                            </label>

                        </fieldset>
                        <div>
                            <input type='submit' value='save'/>
                            <input type='reset' value='reset'/>
                            <input type='button' value='cancel'
                                onClick={() => selectTarget({})}
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