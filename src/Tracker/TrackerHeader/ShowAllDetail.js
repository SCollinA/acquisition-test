import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ showAllDetails }) => (
                <button
                    className='ShowAllDetails'
                    onClick={() => {
                        showAllDetails()
                    }}
                >
                    Show All Details
                </button>
            )}
        </TrackerContext.Consumer>
    )
}