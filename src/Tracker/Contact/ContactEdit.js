import React from 'react'
import uuid from 'uuid'
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
                                defaultValue={contact.name}
                                onChange={({ target }) => {
                                    editingTarget.contacts.find(currentContact => {
                                        return currentContact.id === contact.id
                                    }).name = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input 
                                type='text' 
                                name='contactPhone'
                                value={contact.phoneNumber}
                                onChange={({ target }) => {
                                    editingTarget.contacts.find(currentContact => {
                                        return currentContact.id === contact.id
                                    }).phoneNumber = target.value
                                    editTarget({
                                        ...editingTarget,
                                        contacts: editingTarget.contacts
                                    })
                                }}
                            />
                            <input
                                type='button'
                                className='removeContact'
                                onClick={event => {
                                    event.stopPropagation()
                                    editTarget({
                                        ...editingTarget,
                                        contacts: [
                                            ...editingTarget.contacts.filter(currentContact => {
                                                return currentContact.id !== contact.id
                                            })
                                        ]
                                    })
                                }}
                                value='Remove Contact'
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
                                    { 
                                        id: uuid(),
                                        name: 'new contact',
                                        phoneNumber: '',
                                    }
                                ]
                            })
                        }}
                    />
                    {/* add, edit, delete contacts */}
                </fieldset>       
            )}
        </TrackerContext.Consumer>
    )
}