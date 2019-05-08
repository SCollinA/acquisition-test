import React from 'react'
import './TrackerHeader.css'
import SearchTargets from '../SearchTargets/SearchTargets';
import AddTarget from '../AddTarget/AddTarget';

export default () => {
    return (
        <header className='TrackerHeader'>
            <SearchTargets/>
            <AddTarget/>
        </header>
    )
}