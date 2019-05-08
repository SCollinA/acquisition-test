import React from 'react'
import TrackerContext from '../Context/TrackerContext'
import './TargetList.css'
import TargetListHeader from '../TargetListHeader/TargetListHeader';
import Target from '../Target/Target'
import TargetDetail from '../TargetDetail/TargetDetail';

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ targets, selectedTarget }) => 
                <div className='TargetList'>
                    <TargetListHeader/>
                    {targets.map((target, index) => (
                        <Target key={index} target={target}/>
                    ))}
                    {selectedTarget &&
                        <TargetDetail/>}
                </div>
            }
        </TrackerContext.Consumer>
    )
}