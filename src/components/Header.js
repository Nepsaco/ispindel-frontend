import React from 'react'
import AddWidget from './AddWidget'

export default function Header(props){
    const { toggleForm } = props


    return(
        <div className='header'>
            <h1>Brew Time</h1>
            <li onClick={toggleForm}>Add Widget</li>
        </div>
    )
}
