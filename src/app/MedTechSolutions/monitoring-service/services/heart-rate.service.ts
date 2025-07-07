import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface HeartRateData {
  bpm: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class HeartRateService {
  private apiUrl = 'https://med-system-edge.vercel.app/edge/bpm/data';

  constructor(private http: HttpClient) {}

  getLatest(): Observable<HeartRateData> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        const last = response.data[response.data.length - 1];
        return {
          bpm: Number(last.processed_bpm),
          timestamp: new Date()
        };
      })
    );
  }


}
