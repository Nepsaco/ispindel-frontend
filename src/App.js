import React, { Component } from 'react';
import './App.css';
import DataBox from './components/DataBox'
import Graph from './components/Graph'
const BASE_URL = 'http://localhost:9000' 
const HEROKU = 'https://ispindel-endpoint-1.herokuapp.com' 

class App extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch(`${HEROKU}/ispindel`)
            .then(response => response.json())
            .then(data => {this.setState({ data })})
    }

    render() {
        const { data } = this.state
        return (
            <div className="App">
                <Graph data={data}/>
            </div>
        );
    }
}

export default App;
