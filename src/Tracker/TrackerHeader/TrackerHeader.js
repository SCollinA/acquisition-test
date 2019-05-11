import React from 'react'
import './TrackerHeader.css'
import SearchTargets from './SearchTargets';
import SortTargets from './SortTargets';
import AddTarget from './AddTarget';
import ShowAllDetail from './ShowAllDetail';

export default () => {
    return (
        <header className='TrackerHeader'>
            <div className='searchAddDiv'>
                <SearchTargets/>
                <ShowAllDetail/>
                <AddTarget/>
            </div>
            <SortTargets/>
        </header>
    )
}