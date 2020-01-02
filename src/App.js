import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Graph from './components/Graph'
import Grid from './components/Grid'
import AddWidget from './components/AddWidget'
const BASE_URL = 'http://localhost:9000' 
const HEROKU = 'https://ispindel-endpoint-1.herokuapp.com' 

class App extends Component {
    state = {
        data: [],
        displayForm: false
    }

    componentDidMount() {
        fetch(`${HEROKU}/ispindel`)
            .then(response => response.json())
            .then(data => {this.setState({ data })})
    }

    toggleForm = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    render() {
        const { data, displayForm } = this.state
        return (
            <div className="App">
                <Header toggleForm={this.toggleForm}/>
                {displayForm 
                    ? <AddWidget toggleForm={this.toggleForm}/>
                    : null
                }
                <Grid data={data} />
            </div>
        );
    }
}

export default App;
