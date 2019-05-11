import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ }) => (
                <button
                    className='ShowAllDetails'
                    onClick={() => {

                    }}
                >
                    Show All Details
                </button>
            )}
        </TrackerContext.Consumer>
    )
}