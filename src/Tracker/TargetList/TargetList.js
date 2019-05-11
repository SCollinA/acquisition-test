import React from 'react'
import TrackerContext from '../../Context/TrackerContext'
import './TargetList.css'
import TargetListHeader from './TargetListHeader/TargetListHeader';
import Target from './Target/Target'
import TargetEdit from './TargetEdit/TargetEdit'
import TargetDetail from './TargetDetail/TargetDetail'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ targets, selectedTarget, editingTarget, allDetailsView }) => (
                <div className='TargetList'>
                    <TargetListHeader/>
                    {targets.map(target => {
                        const targetComponent = (
                            selectedTarget.id === target.id ||
                            allDetailsView
                            ) ? (
                            <TargetDetail 
                                key={target.id}
                                target={allDetailsView ?
                                    target :
                                    editingTarget.id === selectedTarget.id ?
                                    editingTarget :
                                    selectedTarget
                                }
                            />
                        ) : (
                            <Target 
                                key={target.id} 
                                target={target}
                            />
                        )
                        console.log(targetComponent)
                        return targetComponent
                    })}
                    {editingTarget.id &&
                        <TargetEdit/>}
                </div>
            )}
        </TrackerContext.Consumer>
    )
}