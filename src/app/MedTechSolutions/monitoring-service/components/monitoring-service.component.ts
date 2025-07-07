import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HeartRateService, HeartRateData } from '../services/heart-rate.service';

@Component({
  selector: 'app-monitoring-service',
  templateUrl: './monitoring-service.component.html'
})
export class MonitoringComponent implements OnInit, OnDestroy {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // Datos del paciente (maqueta)
  patient = {
    name: 'Miguel Torres',
    id: 'PT-2025-001',
    age: 29,
    gender: 'Masculino',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  };

  // Configuración del gráfico
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Frecuencia Cardiaca (BPM)',
        fill: false,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      y: {
        suggestedMin: 40,
        suggestedMax: 180
      }
    },
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    }
  };

  // Control de repetición de BPM
  lastBpm: number | null = null;
  repeatCount = 0;
  maxRepeatsAllowed = 2;
  maxPoints = 20;
  intervalId: any;

  constructor(private heartRateService: HeartRateService) {}

  ngOnInit(): void {
    this.fetchData();
    this.intervalId = setInterval(() => this.fetchData(), 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  fetchData(): void {
    this.heartRateService.getLatest().subscribe({
      next: (data: HeartRateData) => {
        const bpm = Number(data.bpm);
        const timestamp = Date.now();
        this.handleNewData(bpm, timestamp);
      },
      error: (err) => {
        console.error(' Error al obtener datos:', err);
      }
    });
  }


  handleNewData(bpm: number, timestamp: number): void {
    if (this.lastBpm === bpm) {
      this.repeatCount++;
    } else {
      this.repeatCount = 1;
      this.lastBpm = bpm;
    }

    if (this.repeatCount <= this.maxRepeatsAllowed) {
      const timeLabel = new Date(timestamp).toLocaleTimeString();

      this.lineChartData.labels!.push(timeLabel);
      this.lineChartData.datasets[0].data.push(bpm);

      if (this.lineChartData.labels!.length > this.maxPoints) {
        this.lineChartData.labels!.shift();
        this.lineChartData.datasets[0].data.shift();
      }

      this.chart?.update();
    } else {
      console.log(`BPM repetido ${this.repeatCount} veces, ignorado:`, bpm);
    }
  }


  resetData(): void {
    this.lineChartData.labels = [];
    this.lineChartData.datasets[0].data = [];
    this.chart?.update();
    this.lastBpm = null;
    this.repeatCount = 0;
  }
}
