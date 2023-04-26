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
    // registerLicense('MTgyNzk1MkAzMjMxMmUzMTJlMzMzNUVCbHgybjNNSk5yeUcxTGF0L2VUYkxIU1ZDU0dNTldGZGhLMUJYejA3dmM9;Mgo+DSMBaFt+QHFqVkNrWU5GckBAXWFKblF8QWNTeltgFChNYlxTR3ZbQFliTXpbd0RrXHlX;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdX2dWfFN0RnNbdVpwflBDcDwsT3RfQF5jTXxXd0FnUX5feHNWTw==;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BAWXxLflF1VWFTe156cVBWACFaRnZdQV1nS3pSckFrWH5WeXxc;MTgyNzk1NkAzMjMxMmUzMTJlMzMzNWJ1eUllQy9aMU1jUmJhL0ZiL0Q2aUN4NHJHN3dQQnArc24vRytDU2lvUFk9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmFNYVF2R2BJfVR0dF9DZUwxOX1dQl9gSXpRckRnXXdfcX1WQmk=;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdX2dWfFN0RnNbdVpwflBDcDwsT3RfQF5jTXxXd0FnUX5feXBcTw==;MTgyNzk1OUAzMjMxMmUzMTJlMzMzNVVJbTVvZ2xHajA0anlQYmV4bk91NWd5Ykp0Ny9CR3RQV3dQbTJXejN3dU09;MTgyNzk2MEAzMjMxMmUzMTJlMzMzNUk2MElXUkhVbWZzOW5IZHIvbk1KUWxhd0MzeG5oZmNRaXVJMU9hUTlFem89;MTgyNzk2MUAzMjMxMmUzMTJlMzMzNWdUN3BHY1hrSk5POGJDaVhKeVlxcnllR1kzcGpyZHpwWnFYUnFieHJCd1E9;MTgyNzk2MkAzMjMxMmUzMTJlMzMzNUtyTjFLRFVBT1pCRm9PWFgyckw3Rmd0VUQvZGpSMzlCZHhkM2g5WVY0eVU9;MTgyNzk2M0AzMjMxMmUzMTJlMzMzNUVCbHgybjNNSk5yeUcxTGF0L2VUYkxIU1ZDU0dNTldGZGhLMUJYejA3dmM9');
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