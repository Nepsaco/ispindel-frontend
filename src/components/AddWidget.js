import React, { Component } from 'react'

export default class AddWidget extends Component{
    state ={
        data: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = formData.get('')
        console.log(event.target.value)
        this.setState({ data })
        const { toggleForm } = this.props
        toggleForm()
    }

    render(){
        return(
            <div className='overlay'>
                <a className='close' href='#' onClick={this.props.toggleForm}>&times;</a>
                <form className='add-form' onSubmit={this.handleSubmit}>
                    <label>Battery</label>
                    <input type='radio' name='data' value='battery' />
                    <label>Gravity</label>
                    <input type='radio' name='data' value='gravity' />
                    <label>Temperature</label>
                    <input type='radio' name='data' value='temperature' />
                    <label>Angle</label>
                    <input type='radio' name='data' value='angle' />
                    <label>Graph</label>
                    <input type='radio' name='data' value='graph' />
                    <input className='submit' type='submit' value='Add' />
                </form>
            </div>
        )
    }
}
