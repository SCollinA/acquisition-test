import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ sortTargets, sortList }) => (
                <button
                    className='SortTargets'
                    onClick={() => sortTargets()}
                >
                    Sort
                </button>              
            )}
        </TrackerContext.Consumer>
    )
}