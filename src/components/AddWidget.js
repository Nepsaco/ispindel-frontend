import React, { Component } from 'react'

export default class AddWidget extends Component{
    state ={
        battery: '',
    }

    handleSubmit = (event) => {
        toggleForm()
    }

    render(){
        return(
            <form className='add-form'>
                <label>Battery</label>
                <input type='radio' name='battery' />
                <label>Gravity</label>
                <input type='radio' name='Gravity' />
                <label>Temperature</label>
                <input type='radio' name='Temperature' />
                <label>Angle</label>
                <input type='radio' name='Angle' />
                <label>Graph</label>
                <input type='radio' name='Graph' />
                <input type='submit' value='Add' />
            </form>
        )
    }
}
