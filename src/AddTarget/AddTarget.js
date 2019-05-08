import React from 'react'
import TrackerContext from '../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ addTarget }) => (
                <button
                    onClick={addTarget}
                >add target</button>
            )}
        </TrackerContext.Consumer>
    )
}