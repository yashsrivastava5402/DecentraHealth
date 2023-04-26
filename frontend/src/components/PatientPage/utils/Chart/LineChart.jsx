import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import { bloodpressure, bmi, oxygenSaturation, diabetesData, cholesterolData, temp } from './data';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function LineChart() {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Blood Pressure"
    },
    axisY: {
      title: "Systolic",
      suffix: ""
    },
    axisX: {
      title: "Year",
      interval: 1
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}",
      dataPoints: [
        { x: 2013, y: 125 },
        { x: 2014, y: 130 },
        { x: 2015, y: 135 },
        { x: 2016, y: 140 },
        { x: 2017, y: 142 },
        { x: 2018, y: 138 },
        { x: 2019, y: 132 },
        { x: 2020, y: 137 },
        { x: 2021, y: 128 },
        { x: 2022, y: 145 },
      ]
    }]
  }
  return (
    <CanvasJSChart options={options} />
  );
}

export default LineChart;