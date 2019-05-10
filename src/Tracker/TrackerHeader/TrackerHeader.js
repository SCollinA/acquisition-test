import React from 'react'
import './TrackerHeader.css'
import SearchTargets from './SearchTargets';
import SortTargets from './SortTargets';
import AddTarget from './AddTarget';

export default () => {
    return (
        <header className='TrackerHeader'>
            <SearchTargets/>
            <SortTargets/>
            <AddTarget/>
        </header>
    )
}