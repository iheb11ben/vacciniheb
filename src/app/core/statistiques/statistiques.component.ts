import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})


export class StatistiquesComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>|any;
  pourcentageVaccin : number = 20
  constructor() {
    this.chartOptions = {
      series: [this.pourcentageVaccin],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "10%"
          }
        }
      },
      labels: ["Cricket"]
    };
   }

  ngOnInit(): void {
  }

}
