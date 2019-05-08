import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ selectedTarget }) => (
                <form
                    className='TargetDetailForm'
                >

                </form>
            )}
        </TrackerContext.Consumer>
    )
}