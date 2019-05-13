import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ removeSort, sortList, hideSort, sortHidden }) => (
                <button
                    className='ChangeSort'
                    onClick={() => {
                        if (sortList.length > 0) {
                            removeSort()
                        } else {
                            hideSort()
                        }
                    }}
                >
                    {sortList.length > 0 ?
                        'Remove' :
                        sortHidden ?
                            'Show' :
                            'Hide'} Sort
                </button>
            )}
        </TrackerContext.Consumer>
    )
}