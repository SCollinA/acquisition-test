import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ addTarget }) => (
                <button
                    onClick={addTarget}
                >
                    Add Target
                </button>
            )}
        </TrackerContext.Consumer>
    )
}