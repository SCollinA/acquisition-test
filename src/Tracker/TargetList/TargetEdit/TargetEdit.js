import React from 'react'
import './TargetEdit.css'
import TrackerContext from '../../../Context/TrackerContext'
import ContactEdit from './ContactEdit';
import StatusEdit from './StatusEdit';

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
                    onClick={() => saveTarget()}
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
                                    name: target.value,
                                })
                            }}
                        />
                        <ContactEdit/>
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
                        <StatusEdit/>
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