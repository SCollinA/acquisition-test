import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../Context/TrackerContext'

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
                <form
                    className='TargetDetail'
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
            )}
        </TrackerContext.Consumer>
    )
}