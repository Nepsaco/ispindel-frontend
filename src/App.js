import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Grid from './components/Grid'
import AddWidget from './components/AddWidget'
import AuthForm from './components/AuthForm'
const BASE_URL = 'http://localhost:9000' 
const HEROKU = 'https://ispindel-endpoint-1.herokuapp.com' 

class App extends Component {
    state = {
        data: [],
        displayAddForm: false,
        displayAccountForm: true,
        displayWidget: {
            battery: false,
            gravity: false,
            temperature: false,
            angle: false,
            graph: false
        },
        loggedInButton: false, 
        token: ''
    }

    componentDidMount() {
        this.setToken()
        fetch(`${HEROKU}/ispindel`)
            .then(response => response.json())
            .then(data => {this.setState({ data })})

        fetch(`${HEROKU}/authorize`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(response => {
                if(response.error){
                    this.setState({ token: '' })
                } else{
                    this.setToken()
                }

            })
            .catch(error => {
                this.setState({token: ''})
            })
    }

    setToken = () => {
        this.setState({
            token: localStorage.getItem('token')
        })
    }

    toggleLoggedInForm = () => {
        this.setState({
            loggedInButton: !this.state.loggedInButton
        })
    }

    loginUser = (token) => {
        localStorage.setItem('token', token)
    }

    toggleAddForm = () => {
        this.setState({
            displayAddForm: !this.state.displayAddForm
        })
    }

    toggleAccountForm = () => {
        this.setState({
            displayAccountForm: !this.state.displayAccountForm
        })
    }

    toggleWidget = (widget) => {
        const { displayWidget } = this.state
        const newObject = {...displayWidget}
        newObject[widget] = !displayWidget[widget]
        this.setState({ displayWidget: {...newObject }})
    }

    render() {
        const { data, token, displayAddForm, displayAccountForm, displayWidget, userLoggedIn, toggleLoggedInForm, loggedInButton } = this.state
        const isLoggedIn = !!token

        return (
            <div className="App">
                <Header 
                toggleAddForm={this.toggleAddForm} 
                toggleAccountForm={this.toggleAccountForm} 
                    setToken={this.setToken}
                />
                {!isLoggedIn
                    ? <AuthForm 
                        loginUser={this.loginUser} 
                        toggleLoggedInForm={this.toggleLoggedInForm} 
                        loggedInButton={loggedInButton} 
                        setToken={this.setToken}
                        />
                    : <Grid data={data} displayWidget={displayWidget} toggleWidget={this.toggleWidget} />
                }
                {displayAddForm 
                    ? <AddWidget toggleAddForm={this.toggleAddForm} toggleWidget={this.toggleWidget} />
                    : null
                }
            </div>
        );
    }
}

export default App;
