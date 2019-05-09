import React from 'react'
import TrackerContext from '../../Context/TrackerContext'
import './TargetList.css'
import TargetListHeader from './TargetListHeader/TargetListHeader';
import Target from './Target/Target'
import TargetEdit from './TargetEdit/TargetEdit'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ targets, editingTarget }) => 
                <div className='TargetList'>
                    <TargetListHeader/>
                    {targets.map(target => (
                        <Target 
                            key={target.id} 
                            target={
                                target.id === editingTarget.id ?
                                editingTarget :
                                target
                            }
                        />
                    ))}
                    {editingTarget.id &&
                        <TargetEdit/>}
                </div>
            }
        </TrackerContext.Consumer>
    )
}