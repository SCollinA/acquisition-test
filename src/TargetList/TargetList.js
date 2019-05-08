import React from 'react'
import TrackerContext from '../Context/TrackerContext'
import TargetListHeader from '../TargetListHeader/TargetListHeader';
import Target from '../Target/Target'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ targets }) => 
                <div>
                    <h1>target list</h1>
                    <TargetListHeader/>
                    {targets.map(target => (
                        <Target target={target}/>
                    ))}
                </div>
            }
        </TrackerContext.Consumer>
    )
}