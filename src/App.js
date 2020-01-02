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
        displayForm: false,
        displayWidget: {
            battery: false,
            gravity: false,
            temperature: false,
            angle: false,
            graph: false
        }
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

    toggleWidget = (widget) => {
        const { displayWidget } = this.state
        const newObject = {...displayWidget}
        newObject[widget] = !displayWidget[widget]
        this.setState({ displayWidget: {...newObject }})
    }

    render() {
        const { data, displayForm, displayWidget } = this.state
        return (
            <div className="App">
                <Header toggleForm={this.toggleForm}/>
                {displayForm 
                    ? <AddWidget toggleForm={this.toggleForm} toggleWidget={this.toggleWidget} />
                    : null
                }
                <Grid data={data} displayWidget={displayWidget} toggleWidget={this.toggleWidget} />
            </div>
        );
    }
}

export default App;
