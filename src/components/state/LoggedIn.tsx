import React from 'react'
import {useState} from 'react'

const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick = {handleLogin}>Login</button>
            <button onClick = {handleLogout}>Logout</button>
            <div> User is {isLoggedIn ? 'logged in' :'logout'}</div>
        </div>
    )
}

export default LoggedIn