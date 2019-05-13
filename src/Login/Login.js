import React from 'react'
import './Login.css'
import secretPW from '../secretPW'

export default ({ setIsLoggedIn }) => {
    return (
        <form 
            className='Login' 
            onSubmit={event => {
                event.preventDefault()
                if (event.target.password.value === secretPW) {
                    setIsLoggedIn(true)
                } else {
                    window.alert('bad password')
                }
            }}
            onReset={() => null}
        >
            <input 
                style={{
                    display: 'none'
                }}
                autoComplete={'username'} 
                type='text' 
                name='adminUsername' 
                placeholder='no username'
            />
            <input 
                type='password' 
                name='password' 
                placeholder='password'
                autoComplete={'current-password'}
                autoFocus
            />
            <div className='loginButtons'>
                <input type='reset' name='reset' value='Reset'/>
                <input type='submit' name='submit' value='Login'/>
            </div>
        </form>
    )
}