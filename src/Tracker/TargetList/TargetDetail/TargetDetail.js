import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../../../Context/TrackerContext'
import TargetEditButton from './TargetEditButton';
import Contact from '../Contact/Contact';
import KeyMetricsDetail from './KeyMetricsDetail';

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='TargetDetail'
                    onClick={() => selectTarget({})}
                >
                    <TargetEditButton/>
                    <h1>{target.name}</h1>
                    {target.contacts.map((contact, index) => (
                        <Contact key={index} contact={contact}/>
                    ))}
                    <KeyMetricsDetail target={target}/>
                    <h1>{target.status}</h1>
                    {target.history.map((historyEntry, index) => (
                        <h2 className='historyEntry' key={index}>
                            {historyEntry}
                        </h2>
                    ))}
                </div>
            )}
        </TrackerContext.Consumer>
    )
}