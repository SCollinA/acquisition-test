import React from 'react'
import './Target.css'
import TrackerContext from '../../../Context/TrackerContext'
import Contact from '../Contact/Contact';

export default ({ target }) => {
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='Target'
                    onClick={() => selectTarget(target)}
                >
                    <h1>{target.info.name || 'No Name'}</h1>
                    {target.contacts.length > 0 ?
                        <Contact contact={target.contacts[0]}/> :
                        <h1>No Contacts</h1>}
                    <h1>{target.status}</h1>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}