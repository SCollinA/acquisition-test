import React from 'react'
import './Contact.css'

export default ({ contact }) => {
    return (
        <div className='Contact'>
            <h3>{contact.name}</h3>
            <h3>{contact.phoneNumber}</h3>
        </div>
    )
}