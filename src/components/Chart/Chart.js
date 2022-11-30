import React from 'react';
import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value) // transforms and object to just a value number, returing a new array of just numbers
    const totalMax = Math.max(...dataPointValues) //you need to pull out the numbers from the array for .max to work

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMax} 
                    label={dataPoint.label} 
                />)}
        </div>
    )
}

export default Chart