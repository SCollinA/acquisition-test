import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({  editTarget }) => (
                <button 
                    className='editButton'
                    onClick={event => {
                        event.stopPropagation()
                        editTarget(target)
                    }}
                >
                    Edit
                </button>
            )}
        </TrackerContext.Consumer>
    )
}