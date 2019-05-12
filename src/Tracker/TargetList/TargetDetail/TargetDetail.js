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
                    {/* {!allDetailsView &&  */}
                        <TargetEditButton target={target}/>
                        {/* } */}
                    <div className='infoMetrics'>
                        <CompanyInfoDetail target={target}/>
                        <KeyMetricsDetail target={target}/>
                    </div>
                    <div className='contactsDetail'>
                        {target.contacts.map((contact, index) => (
                            <Contact key={index} contact={contact}/>
                        ))}
                    </div>
                    <h2>{target.status}</h2>
                    {/* {target.history.map((historyEntry, index) => (
                        <h2 className='historyEntry' key={index}>
                            {historyEntry}
                        </h2>
                    ))} */}
                </div>
            )}
        </TrackerContext.Consumer>
    )
}