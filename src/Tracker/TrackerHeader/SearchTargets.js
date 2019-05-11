import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ searchTerm, updateSearchTerm }) => (
                <input 
                    type='text' 
                    name='searchTargets' 
                    placeholder='search term'
                    value={searchTerm}
                    onChange={({ target: { value } }) => updateSearchTerm(value)}
                />
            )}
        </TrackerContext.Consumer>
    )
}