import React from 'react'
import TrackerContext from '../../../Context/TrackerContext'
import { Contact } from '../Contact/Contact'

export default () => {
    return (
        <TrackerContext.Consumer>
            {({ editingTarget, editTarget }) => (
                <fieldset className='ContactEdit'>
                    <legend>Contacts</legend>
                    {editingTarget.contacts &&
                    editingTarget.contacts.map(contact => (
                        <div key={contact.id} className='contactEditInputs'>
                            <input
                                type='text' 
                                name='contactName'
                                placeholder='Contact Name'
                                value={contact.name}
                                onChange={({ target }) => {
                                    contact.name = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input 
                                type='tel' 
                                name='contactPhone'
                                placeholder='Phone Number'
                                value={contact.phoneNumber}
                                onChange={({ target }) => {
                                    for (const char of target.value) {
                                        if (isNaN(parseInt(char))) return
                                    }
                                    contact.phoneNumber = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input
                                type='button'
                                className='removeContact'
                                value='Remove'
                                onClick={event => {
                                    event.stopPropagation()
                                    if (window.confirm('Are you sure?')) {
                                        editTarget({
                                            ...editingTarget,
                                            contacts: [
                                                ...editingTarget.contacts.filter(currentContact => {
                                                    return currentContact.id !== contact.id
                                                })
                                            ]
                                        })
                                    }
                                }}
                            />
                        </div>
                    ))}
                    <input 
                        type='button' 
                        className='addContact'
                        value='Add Contact'
                        onClick={event => {
                            event.stopPropagation()
                            editTarget({
                                ...editingTarget,
                                contacts: [
                                    ...editingTarget.contacts,
                                    new Contact()
                                ]
                            })
                        }}
                    />
                </fieldset>       
            )}
        </TrackerContext.Consumer>
    )
}