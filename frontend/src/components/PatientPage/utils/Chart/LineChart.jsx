// import React from 'react';
// import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
// import { bloodpressure } from './data';
// import { diabetesData ,bmi,oxygenSaturation,cholesterolData,temp} from './data';
// import './linechart.css';
// import { registerLicense } from '@syncfusion/ej2-base';
// import { Box } from '@mui/material';
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function LineChart() {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
      text: "Bounce Rate by Week of Year"
    },
    axisY: {
      title: "Bounce Rate",
      suffix: "%"
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: [
        { x: 1, y: 64 },
        { x: 2, y: 61 },
        { x: 3, y: 64 },
        { x: 4, y: 62 },
        { x: 5, y: 64 },
        { x: 6, y: 60 },
        { x: 7, y: 58 },
        { x: 8, y: 59 },
        { x: 9, y: 53 },
        { x: 10, y: 54 },
        { x: 11, y: 61 },
        { x: 12, y: 60 },
        { x: 13, y: 55 },
        { x: 14, y: 60 },
        { x: 15, y: 56 },
        { x: 16, y: 60 },
        { x: 17, y: 59.5 },
        { x: 18, y: 63 },
        { x: 19, y: 58 },
        { x: 20, y: 54 },
        { x: 21, y: 59 },
        { x: 22, y: 64 },
        { x: 23, y: 59 }
      ]
    }]
  }
    // registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpAaV5FQmFJfFBmRGNTf196dVBWESFaRnZdQV1gSHZSdkVmWnxXc3xQ;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmJOYVF2R2BJfl56dFRMYVlBNQtUQF1hSn5Qd01iWX9bc3dcQ2NZ;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxIeUx0RWFab19wflVHal1UVAciSV9jS31TdURrWH9edXdWT2ZVVA==;MTM2NTQzOEAzMjMwMmUzNDJlMzBpYmZpa3pyWWRwVlpiVkQ5ajZaa3E2SGxFRGV2ZGZ4WlAxYVBuRHVEa21VPQ==;MTM2NTQzOUAzMjMwMmUzNDJlMzBhc0RRWTRSSUtOVmNzM2drZ2NLU1I0L0F2eFQyMUhsRk42bjdBTlZ6UmNNPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWf1RpR2NbfE5xdF9GYVZQQWYuP1ZhSXxQdkZiUX5ecHFWQmFcVUA=;MTM2NTQ0MUAzMjMwMmUzNDJlMzBmOHdKVE9GME13OVR5ZXd0TG14OUJ1OHNYQW5nNTNxQWtMM3Q1NXByTXk0PQ==;MTM2NTQ0MkAzMjMwMmUzNDJlMzBTNFRYUjY3Z21xekxsdnk0MjFjRWdRNzZ6TjBYeDNOM3hOTnJYaWR1QVNFPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxIeUx0RWFab19wflVHal1UVAciSV9jS31TdURrWH9edXdRR2ZaVA==;MTM2NTQ0NEAzMjMwMmUzNDJlMzBZOG9LRDgwUzdCT3R0QS9GT3VjUjYxV21hRnNMcVB0bGdQa1NOejBDaW5FPQ==;MTM2NTQ0NUAzMjMwMmUzNDJlMzBMSjJLRmdoNFRVdFVwU3JhaCtXanJ6aFlxSFFhcG9nb1R3L0FDeWxFMEpnPQ==;MTM2NTQ0NkAzMjMwMmUzNDJlMzBmOHdKVE9GME13OVR5ZXd0TG14OUJ1OHNYQW5nNTNxQWtMM3Q1NXByTXk0PQ==');
  return (
  //   <Box>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Day"}} title="Blood Pressure"
  //  primaryYAxis={{title:"Systolic / Diastolic"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={bloodpressure} xName="year" yName="systolic" type="Line" name="systolic" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //      <SeriesDirective dataSource={bloodpressure} xName="year" yName="diastolic" type="Line" name="diastolic" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Day"}} title="Sugal Level"
  //  primaryYAxis={{title:"Sugar Level"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={diabetesData} xName="year" yName="bloodsugar" type="Line" name="Sugar Level" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Oxygen Saturation"
  //  primaryYAxis={{title:"Oxygen Saturation"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={oxygenSaturation} xName="year" yName="oxygen_saturation" type="Line" name="Oxygen Saturation" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="BMI"
  //  primaryYAxis={{title:"Body Mass Index"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={bmi} xName="year" yName="bmi" type="Line" name="BMI" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Cholesterol"
  //  primaryYAxis={{title:"Cholestrol"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={cholesterolData} xName="year" yName="cholesterol" type="Line" name="Cholestrol" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Body Temperature"
  //  primaryYAxis={{title:"Body Temperature"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
  //    <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
  //    <SeriesCollectionDirective>
  //      <SeriesDirective dataSource={temp} xName="year" yName="temp" type="Line" name="temperature" 
  //      marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
  //    </SeriesCollectionDirective>
  //  </ChartComponent>
  //  </Box>
  <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
  );
}

export default LineChart;