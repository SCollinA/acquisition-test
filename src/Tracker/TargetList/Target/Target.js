import React from 'react'
import './Target.css'
import TrackerContext from '../../../Context/TrackerContext'
import Contact from '../Contact/Contact';

export default ({ target }) => {
    // a harmless comment to test gitignore
    return (
        <TrackerContext.Consumer>
            {({ selectTarget }) => (
                <div 
                    className='Target'
                    onClick={() => selectTarget(target)}
                >
                    <h3>{target.info.name || 'No Name'}</h3>
                    {target.contacts.length > 0 ?
                        <Contact contact={target.contacts[0]}/> :
                        <h3>No Contacts</h3>}
                    <h3>{target.status}</h3>
                </div>
            )}
        </TrackerContext.Consumer>
    )
}