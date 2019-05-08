import React from 'react'
import './Login.css'

export default ({ setIsLoggedIn }) => {
    return (
        <form 
            className='Login' 
            onSubmit={event => {
                event.preventDefault()
                setIsLoggedIn(true)}
            }
            onReset={() => null}
        >
            <input type='password' name='password' placeholder='password'/>
            <input type='submit' name='submit' value='Login'/>
            <input type='reset' name='reset' value='Reset'/>
        </form>
    )
}