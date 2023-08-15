import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={

      chart: {
        type: 'area'
        
    },
    title: {
        text: 'Yearly Sales'
    },
    subtitle: {
       
        align: 'right',
        verticalAlign: 'bottom'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 60,
        floating: true,
        borderWidth: 1,
       
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    plotOptions: {
        series: {
            pointStart: 2016
        },
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'sales',
        data: [10, 9, 11, 11, 8, 13, 12, 14]
    },]
    };
      


    }


    



  }

  


