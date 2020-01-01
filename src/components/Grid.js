import React from 'react';
import Graph from './Graph'

export default function Grid(props) {
    const { data } = props

    return(
        <div className='grid-container'>
            <Graph data={data} />
        </div>
    )
}
