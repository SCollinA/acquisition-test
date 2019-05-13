import React from 'react'
import uuid from 'uuid'
import './Contact.css'

export default ({ contact }) => {
    return (
        <div className='Contact'>
            <h3>{contact.name || 'No Name'}</h3>
            <h3>{contact.phoneNumber}</h3>
        </div>
    )
}

export class Contact {
    constructor(
        name = '',
        phoneNumber = ''
    ) {
        this.id = uuid()
        this.name = name
        this.phoneNumber = phoneNumber
    }
}