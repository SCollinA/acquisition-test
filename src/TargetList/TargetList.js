import React from 'react'
import TrackerContext from '../Context/TrackerContext'
import './TargetList.css'
import TargetListHeader from '../TargetListHeader/TargetListHeader';
import Target from '../Target/Target'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ targets }) => 
                <div className='TargetList'>
                    <TargetListHeader/>
                    {targets.map((target, index) => (
                        <Target key={index} target={target}/>
                    ))}
                </div>
            }
        </TrackerContext.Consumer>
    )
}