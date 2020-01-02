import React, { Component } from 'react'

export default class AddWidget extends Component{
    state = {
        widget: ''
    }

    handleChange = (event) => {
        this.setState({
            widget: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        this.props.toggleWidget(this.state.widget)
        const { toggleForm } = this.props
        toggleForm()
    }

    render(){
        return(
            <div className='overlay'>
                <a className='close' href='#' onClick={this.props.toggleForm}>&times;</a>
                <form className='add-form' onSubmit={this.handleSubmit}>
                    <input 
                        type='radio' 
                        name='data' 
                        value='battery' 
                        checked={this.state.widget === 'battery'} 
                        onChange={this.handleChange}
                    />
                    <label>Battery</label>
                    <input 
                        type='radio' 
                        name='data' 
                        value='gravity' 
                        checked={this.state.widget === 'gravity'} 
                        onChange={this.handleChange}
                    />
                    <label>Gravity</label>
                    <input 
                        type='radio' 
                        name='data' 
                        value='temperature' 
                        checked={this.state.widget === 'temperature'} 
                        onChange={this.handleChange}
                    />
                    <label>Temperature</label>
                    <input 
                        type='radio' 
                        name='data' 
                        value='angle' 
                        checked={this.state.widget === 'angle'} 
                        onChange={this.handleChange}
                    />
                    <label>Angle</label>
                    <input 
                        type='radio' 
                        name='data' 
                        value='graph' 
                        checked={this.state.widget === 'graph'} 
                        onChange={this.handleChange}
                    />
                    <label>Graph</label>
                    <input 
                        className='submit' 
                        type='submit' 
                        value='Add' 
                    />
                </form>
            </div>
        )
    }
}
