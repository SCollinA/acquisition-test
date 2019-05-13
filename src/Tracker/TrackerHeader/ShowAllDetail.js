import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ showAllDetails, allDetailsView }) => (
                <button
                    className='ShowAllDetails'
                    onClick={() => {
                        showAllDetails()
                    }}
                >
                    {!allDetailsView ?
                        'Show' :
                        'Hide'} All Details
                </button>
            )}
        </TrackerContext.Consumer>
    )
}