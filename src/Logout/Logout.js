import React from 'react'
import './Logout.css'

export default ({ setIsLoggedIn }) => {
    return (
        <button 
            className='Logout'
            onClick={() => setIsLoggedIn(false)}
        >
            Logout
        </button>
    )
}