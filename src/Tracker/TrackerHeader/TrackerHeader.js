import React from 'react'
import './TrackerHeader.css'
import SearchTargets from './SearchTargets';
import SortTargets from './SortTargets';
import AddTarget from './AddTarget';
import ShowAllDetail from './ShowAllDetail';
import ChangeSort from './ChangeSort';

export default () => {
    return (
        <header className='TrackerHeader'>
            <div className='searchAddDiv'>
                <SearchTargets/>
                <ShowAllDetail/>
                <ChangeSort/>
                <AddTarget/>
            </div>
            <SortTargets/>
        </header>
    )
}