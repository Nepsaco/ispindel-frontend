import React from 'react'

export default function Header(props){
    const { toggleAddForm, toggleAccountForm, setToken } = props

    const logOut = (event) =>{
        alert('You Logged Out')
        localStorage.removeItem('token')
        setToken()
    }

    return(
        <div className='header'>
            <h1>Brew Time</h1>
            <ul>
                <li onClick={toggleAddForm}>Add Widget</li>
                <li onClick={toggleAccountForm}>Account</li>
                <li onClick={logOut}>Log Out</li>
            </ul>
        </div>
    )
}
