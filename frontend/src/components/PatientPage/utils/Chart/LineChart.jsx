import React from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import { bloodpressure } from './data';
import { diabetesData ,bmi,oxygenSaturation,cholesterolData,temp} from './data';
import './linechart.css';
import { registerLicense } from '@syncfusion/ej2-base';
import { Box } from '@mui/material';

function LineChart() {
    registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfVpdX2dWfFN0RnNbdVx0flRPcDwsT3RfQF5jTXxXd0FhXXtecnJXRA==');
  return (
    <Box>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Day"}} title="Blood Pressure"
   primaryYAxis={{title:"Systolic / Diastolic"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={bloodpressure} xName="year" yName="systolic" type="Line" name="systolic" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
       <SeriesDirective dataSource={bloodpressure} xName="year" yName="diastolic" type="Line" name="diastolic" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Day"}} title="Sugal Level"
   primaryYAxis={{title:"Sugar Level"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={diabetesData} xName="year" yName="bloodsugar" type="Line" name="Sugar Level" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Oxygen Saturation"
   primaryYAxis={{title:"Oxygen Saturation"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={oxygenSaturation} xName="year" yName="oxygen_saturation" type="Line" name="Oxygen Saturation" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="BMI"
   primaryYAxis={{title:"Body Mass Index"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={bmi} xName="year" yName="bmi" type="Line" name="BMI" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Cholesterol"
   primaryYAxis={{title:"Cholestrol"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={cholesterolData} xName="year" yName="cholesterol" type="Line" name="Cholestrol" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Year"}} title="Body Temperature"
   primaryYAxis={{title:"Body Temperature"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={temp} xName="year" yName="temp" type="Line" name="temperature" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
   </Box>
  );
}

export default LineChart;