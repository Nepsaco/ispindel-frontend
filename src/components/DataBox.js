import React from 'react';
import Graph from './Graph'

export default function Databox(props) {
    const { data } = props
    return(
        <div className='data-container'>
            <Graph data={data}/>
        </div>
    )
}
