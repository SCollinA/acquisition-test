import React from 'react'
import './Target.css'
import TrackerContext from '../../../Context/TrackerContext'

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='Target'
                    onClick={() => selectTarget(target)}
                >
                    <h3>{target.info.name || 'No Name'}</h3>
                    <h3>{target.status}</h3>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}