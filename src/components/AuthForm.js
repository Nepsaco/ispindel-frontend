import React from 'react'
const HEROKU = 'https://ispindel-endpoint-1.herokuapp.com' 

export default function AuthForm(props) {

    const { loginUser, loggedInButton, toggleLoggedInForm, setToken } = props

    const signUp = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')

        fetch(`${HEROKU}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
            .then(({ token }) => loginUser(token))
            .then(setToken)

        event.target.reset()
    }

    const login = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')

        fetch(`${HEROKU}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
            .then(({ token }) => loginUser(token))
            .then(setToken)

        event.target.reset()
    }

    return(
        <div className='overlay'>
            {loggedInButton
            ?<form className='user-signup' onSubmit={login}>
                <h2>Login</h2>
                <input type='text' name='username' placeholder='username' required />
                <input type='password' name='password' placeholder='password' required />
                <input type='submit' value='Login' />
                <input type='button' value='Sign Up' onClick={toggleLoggedInForm}/>
            </form>
            :<form className='user-signup' onSubmit={signUp}>
                <h2>Sign Up</h2>
                <input type='text' name='username' placeholder='username' required />
                <input type='password' name='password' placeholder='password' required />
                <input type='submit' value='Create User' />
                <input type='button' value='Login' onClick={toggleLoggedInForm}/>
            </form>
            }
        </div>
    )
}
