import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface HeartRateData {
  timestamp: Date;
  bpm: number;
}

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring-service.component.html',
  styleUrls: ['./monitoring-service.component.css']
})
export class MonitoringComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['timestamp', 'bpm'];
  dataSource = new MatTableDataSource<HeartRateData>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Datos para el gráfico
  // monitoring-service.component.ts (fragmento relevante)
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['10:00', '10:01', '10:02'],
    datasets: [
      {
        data: [72, 75, 70],
        label: 'Frecuencia Cardiaca',
        fill: false,
        borderColor: 'red',
        tension: 0
      }
    ]
  };



  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        min: 40,
        max: 180
      }
    }
  };

  private maxPoints = 20;
  private intervalId: any;

  ngOnInit(): void {
    // Simular llegada de datos cada segundo
    this.intervalId = setInterval(() => {
      const newData = this.simulateHeartRateData();
      this.addHeartRateData(newData);
    }, 1000);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  simulateHeartRateData(): HeartRateData {
    return {
      timestamp: new Date(),
      bpm: Math.floor(60 + Math.random() * 40)
    };
  }

  addHeartRateData(newData: HeartRateData) {
    // Actualizar datos de la tabla
    const data = this.dataSource.data;
    data.unshift(newData); // Añadir al inicio (más reciente primero)
    if (data.length > 100) {
      data.pop(); // Mantener máximo 100 registros
    }
    this.dataSource.data = data;

    // Preparar etiquetas y datos para el gráfico (copias nuevas)
    const timeLabel = newData.timestamp.toLocaleTimeString();
    const labels = this.lineChartData.labels ? [...this.lineChartData.labels, timeLabel] : [timeLabel];
    let dataSetData = [...this.lineChartData.datasets[0].data, newData.bpm];

    // Mantener máximo de puntos para el gráfico
    if (labels.length > this.maxPoints) {
      labels.shift();
      dataSetData.shift();
    }

    // Actualizar referencia del objeto lineChartData para que Angular detecte cambios
    this.lineChartData = {
      ...this.lineChartData,
      labels,
      datasets: [
        {
          ...this.lineChartData.datasets[0],
          data: dataSetData
        }
      ]
    };
  }


  resetData() {
    this.dataSource.data = [];
    this.lineChartData.labels = [];
    this.lineChartData.datasets[0].data = [];
  }
}
