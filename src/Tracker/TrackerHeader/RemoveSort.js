import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ removeSort }) => (
                <button
                    className='RemoveSort'
                    onClick={() => {
                        removeSort()
                    }}
                >
                    Remove Sort
                </button>
            )}
        </TrackerContext.Consumer>
    )
}