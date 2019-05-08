import React from 'react'

export default ({ setIsLoggedIn }) => {
    return (
        <button onClick={() => setIsLoggedIn(false)}/>
    )
}