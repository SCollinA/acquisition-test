import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ selectedTarget, editTarget }) => (
                <button 
                    className='editButton'
                    onClick={event => {
                        event.stopPropagation()
                        editTarget(selectedTarget)
                    }}
                >
                    Edit
                </button>
            )}
        </TrackerContext.Consumer>
    )
}