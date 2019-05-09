import React from 'react'
import TrackerContext from '../../Context/TrackerContext'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editingTarget, editTarget }) => (
                <fieldset className='ContactEdit'>
                    <legend>Contacts</legend>
                    {editingTarget.contacts.map((contact, index) => (
                        <div key={index} className='contactEditInputs'>
                            <input
                                type='text' 
                                name='contactName'
                                value={contact.name}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        contacts: [
                                            ...editingTarget.contacts.filter(currentContact => currentContact.id !== contact.id),
                                            {
                                                ...contact,
                                                name: target.value
                                            }
                                        ]
                                    })
                                }}
                            />
                            <input 
                                type='text' 
                                name='contactPhone'
                                value={contact.phoneNumber}
                                onChange={({ target }) => {
                                    editTarget({
                                        ...editingTarget,
                                        contacts: [
                                            ...editingTarget.contacts.filter(currentContact => currentContact.id !== contact.id),
                                            {
                                                ...contact,
                                                phoneNumber: target.value
                                            }
                                        ]
                                    })
                                }}
                            />
                        </div>
                    ))}
                </fieldset>       
            )}
        </TrackerContext.Consumer>
    )
}