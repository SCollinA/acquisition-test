import React from 'react'
import './Login.css'
import secretPW from '../secretPW'

export default ({ setIsLoggedIn }) => {
    return (
        <form 
            className='Login' 
            onSubmit={event => {
                event.preventDefault()
                console.log(event.target.password.value, process.env.LOGIN_PW)
                if (event.target.password.value === secretPW) {
                    setIsLoggedIn(true)
                } else {
                    window.alert('bad password')
                }
            }}
            onReset={() => null}
        >
            <input type='password' name='password' placeholder='password'/>
            <input type='submit' name='submit' value='Login'/>
            <input type='reset' name='reset' value='Reset'/>
        </form>
    )
}