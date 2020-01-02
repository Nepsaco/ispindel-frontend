import React from 'react'

export default function Widget(props) {
    const { data, type, toggleWidget, widget } = props
    return(
        <div className='widget'>
            <a className='close' href='#' onClick={() => toggleWidget(widget)}>&times;</a>
            <div className='data-container'>
                <h2>{data}</h2>
            </div>
            <div className='type-container'>
                <h3>{type}</h3>
            </div>
        </div>
    )
}
