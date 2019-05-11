import React from 'react'
import './TrackerHeader.css'
import SearchTargets from './SearchTargets';
import SortTargets from './SortTargets';
import AddTarget from './AddTarget';
import ShowAllDetail from './ShowAllDetail';
import RemoveSort from './RemoveSort';

export default () => {
    return (
        <header className='TrackerHeader'>
            <div className='searchAddDiv'>
                <SearchTargets/>
                <ShowAllDetail/>
                <RemoveSort/>
                <AddTarget/>
            </div>
            <SortTargets/>
        </header>
    )
}