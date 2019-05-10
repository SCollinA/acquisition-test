import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ addSortObject }) => (
                <div className='SortTargets'>
                    <button
                        className='sortName'
                        onClick={() => {
                            addSortObject('name')
                        }}
                        >
                        Name
                    </button>
                    <button
                        className='sortEmployeesCount'
                        onClick={() => {
                            addSortObject('employeesCount')
                        }}
                    >
                        Employees Count
                    </button>
                    <button
                        className='sortStatus'
                        onClick={() => {
                            addSortObject('status')
                        }}
                        >
                        Status
                    </button>              
                </div>
            )}
        </TrackerContext.Consumer>
    )
}