import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Support Requests',
        align: 'center'
    },
    subtitle: {
        text: 'Inprogress,Complete ,Delayed',
        align: 'center'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'productivity',
        data: [
            ['Inprogress', 60],
            ['Complete', 30],
            ['Delayed', 10],
            
        ]
    }]


    }
  }


}
