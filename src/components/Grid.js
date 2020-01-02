import React from 'react';
import Graph from './Graph'
import Widget from './Widget'

export default function Grid(props) {
    const { data, displayWidget, toggleWidget } = props

    return(
        <div className='grid-container'>
            <Graph data={data} toggleWidget={toggleWidget} widget={'graph'} />
            {displayWidget.angle
                ?<Widget data={`${data[0].angle}°`}  widget={'angle'} type={'Angle'} toggleWidget={toggleWidget} />
                :null
            }
            {displayWidget.battery
                ?<Widget data={data[0].battery} widget={'battery'} type={'Battery V'}  toggleWidget={toggleWidget} />
                :null
            }
            {displayWidget.gravity
                ?<Widget data={`${data[0].gravity} °P`} widget={'gravity'} type={'Specific Gravity'} toggleWidget={toggleWidget} />
                :null
            }
            {displayWidget.temperature
                ?<Widget data={`${data[0].temperature} °C`} widget={'temperature'} type={'Temperature'} toggleWidget={toggleWidget} />
                :null
            }
        </div>
    )
}
