import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { VaccineClass } from 'src/app/classes/vaccines/vaccine-class';

@Component({
  selector: 'app-vaccines-all',
  templateUrl: './vaccines-all.component.html',
  styleUrls: ['./vaccines-all.component.scss'],
})
export class VaccinesAllComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      }
    },
    layout: {
      padding: {
        left: 35,
        right: 35
      }
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [
      [ 'Vacinas Pendentes' ], [ 'Vacinas Feitas' ],
    ],
    datasets: [ {
      data: [ 500, 300 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';

  constructor(
    public myClass: VaccineClass
  ) { }

}
