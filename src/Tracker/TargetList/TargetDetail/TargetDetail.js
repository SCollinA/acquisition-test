import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../../../Context/TrackerContext'
import TargetEditButton from './TargetEditButton';
import Contact from '../Contact/Contact';
import KeyMetricsDetail from './KeyMetricsDetail';
import CompanyInfoDetail from './CompanyInfoDetail';

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget, allDetailsView }) => (
                <div 
                    className='TargetDetail'
                    onClick={() => selectTarget({})}
                >
                    {!allDetailsView && 
                        <TargetEditButton/>}
                    <CompanyInfoDetail target={target}/>
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