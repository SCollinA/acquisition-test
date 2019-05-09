import React from 'react'
import './TargetDetail.css'
import TrackerContext from '../../../Context/TrackerContext'
import TargetEditButton from './TargetEditButton';

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
                        <div className='contact' key={index}>
                            <h1>{contact.name}</h1>
                            <h1>{contact.phoneNumber}</h1>
                        </div>
                        // make a contact component
                        // add 'add contact' button here
                        // add 'edit contact' button here
                        // add 'remove contact' button here
                        // or have a contact modal
                    ))}
                    <h1>{target.keyMetrics.revenue}</h1>
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