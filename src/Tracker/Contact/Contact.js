import React from 'react'
import './Contact.css'

export default ({ contact }) => {
    return (
        <div className='Contact'>
            <h1>{contact.name}</h1>
            <h1>{contact.phoneNumber}</h1>
        </div>
    )
}