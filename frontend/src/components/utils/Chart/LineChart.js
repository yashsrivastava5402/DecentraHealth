import React from 'react';
import { ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, Legend,
DataLabel, Tooltip } from '@syncfusion/ej2-react-charts';
import { salesData } from './data';
import './linechart.css';
import { registerLicense } from '@syncfusion/ej2-base';
function LineChart() {
    registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpAaV5FQmFJfFBmRGNTf196dVBWESFaRnZdQV1gSHZSdkVmWnxXc3xQ;Mgo+DSMBPh8sVXJ0S0J+XE9AflRGQmJOYVF2R2BJfl56dFRMYVlBNQtUQF1hSn5Qd01iWX9bc3dcQ2NZ;ORg4AjUWIQA/Gnt2VVhkQlFacldJWXxIeUx0RWFab19wflVHal1UVAciSV9jS31TdURrWH9edXdWT2ZVVA==;MTM2NTQzOEAzMjMwMmUzNDJlMzBpYmZpa3pyWWRwVlpiVkQ5ajZaa3E2SGxFRGV2ZGZ4WlAxYVBuRHVEa21VPQ==;MTM2NTQzOUAzMjMwMmUzNDJlMzBhc0RRWTRSSUtOVmNzM2drZ2NLU1I0L0F2eFQyMUhsRk42bjdBTlZ6UmNNPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmdWf1RpR2NbfE5xdF9GYVZQQWYuP1ZhSXxQdkZiUX5ecHFWQmFcVUA=;MTM2NTQ0MUAzMjMwMmUzNDJlMzBmOHdKVE9GME13OVR5ZXd0TG14OUJ1OHNYQW5nNTNxQWtMM3Q1NXByTXk0PQ==;MTM2NTQ0MkAzMjMwMmUzNDJlMzBTNFRYUjY3Z21xekxsdnk0MjFjRWdRNzZ6TjBYeDNOM3hOTnJYaWR1QVNFPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJWXxIeUx0RWFab19wflVHal1UVAciSV9jS31TdURrWH9edXdRR2ZaVA==;MTM2NTQ0NEAzMjMwMmUzNDJlMzBZOG9LRDgwUzdCT3R0QS9GT3VjUjYxV21hRnNMcVB0bGdQa1NOejBDaW5FPQ==;MTM2NTQ0NUAzMjMwMmUzNDJlMzBMSjJLRmdoNFRVdFVwU3JhaCtXanJ6aFlxSFFhcG9nb1R3L0FDeWxFMEpnPQ==;MTM2NTQ0NkAzMjMwMmUzNDJlMzBmOHdKVE9GME13OVR5ZXd0TG14OUJ1OHNYQW5nNTNxQWtMM3Q1NXByTXk0PQ==');
  return (
   <ChartComponent primaryXAxis={{valueType: "Category", title:"Month"}} title="Sales Analysis"
   primaryYAxis={{title:"Sales"}} legendSettings={{visible: true}} tooltip={{enable: true}}> 
     <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
     <SeriesCollectionDirective>
       <SeriesDirective dataSource={salesData} xName="month" yName="sales" type="Line" name="Sales" 
       marker={{dataLabel:{visible: true}, visible:true}}></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
  );
}

export default LineChart;