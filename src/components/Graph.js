import React, { Component } from 'react'
import { VictoryZoomContainer, VictoryTooltip, VictoryChart, VictoryScatter, VictoryLine, VictoryAxis} from 'victory'

export default class Graph extends Component{
    state = {}

    gravityDataArray = (data) => {
        return data.map(object => {
            const time = new Date(object.created_at).toLocaleTimeString()
            const newObject = {x: time, y: object.gravity, label: `${object.gravity}°P`} 
            return newObject
    })

    } 

    temperatureDataArray = (data) => {
        return data.map(object => {
            const time = new Date(object.created_at).toLocaleTimeString()
            const newObject = {x: time, y: object.temperature, label: `${object.temperature}°C`} 
            return newObject
    })

    } 

    handleZoom(domain) {
        this.setState({selectedDomain: domain});
    }

    render() {
        return(
            <div className='graph'>
                <VictoryChart
                    style={{
                        parent: {maxWidth: '80%'}
                    }}
                    minDomain={0}
                    containerComponent={<VictoryZoomContainer zoomDomain={{y: [0, 40]}}/>}
                >
                    <VictoryLine 
                        style={{
                            data: { stroke: 'hsl(0, 60%, 50%)' },
                        }}
                        labelComponent={<VictoryTooltip/>}
                        data={this.gravityDataArray(this.props.data)}
                        animate={{
                            duration: 3500,
                            easing: 'sinInOut',
                            OnExit: 500
                        }}
                    />
                    <VictoryAxis 
                        dependentAxis={true}
                        scale='linear'
                        tickFormat={(t) => `${t}°P`}
                    > 
                    </VictoryAxis>
                    <VictoryAxis
                        dependentAxis={true}
                        scale='linear'
                        minDomain={0}
                        tickFormat={(t) => `${t}°`}
                        orientation='right'
                    > 
                    </VictoryAxis>
                    <VictoryAxis
                        independentAxis={true}
                        label='Time'
                        tickCount={3}
                    > 
                    </VictoryAxis>
                    <VictoryLine 
                        style={{
                            data: { stroke: 'hsl(240, 60%, 50%)' },
                        }}
                        data={this.temperatureDataArray(this.props.data)}
                        animate={{
                            duration: 3500,
                            easing: 'sinInOut'
                        }}
                        labelComponent={<VictoryTooltip />}
                    />
                    <VictoryScatter
                        style={{
                            data: { fill: 'hsl(0, 60%, 50%)' },
                        }}
                        data={this.gravityDataArray(this.props.data)}
                        labelComponent={<VictoryTooltip/>}
                        animate={{
                            duration: 3500,
                            easing: 'sinInOut',
                            OnExit: 500
                        }}
                    />
                    <VictoryScatter
                        style={{
                            data: { fill: 'hsl(240, 60%, 50%)' },
                        }}
                        data={this.temperatureDataArray(this.props.data)}
                        labelComponent={<VictoryTooltip/>}
                        animate={{
                            duration: 3500,
                            easing: 'sinInOut'
                        }}
                    />
                </VictoryChart>

            </div>
        )
    }
}
