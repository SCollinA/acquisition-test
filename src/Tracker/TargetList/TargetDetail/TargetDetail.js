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
            {({ selectTarget }) => (
                <div 
                    className='TargetDetail'
                    onClick={() => selectTarget({})}
                >
                    <TargetEditButton target={target}/>
                    <div className='infoMetrics'>
                        <CompanyInfoDetail target={target}/>
                        <KeyMetricsDetail target={target}/>
                    </div>
                    {target.contacts &&
                        <div className='contactsDetail'>
                            {target.contacts.map((contact, index) => (
                                <Contact key={index} contact={contact}/>
                            ))}
                        </div>}
                    <h2>{target.status}</h2>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}