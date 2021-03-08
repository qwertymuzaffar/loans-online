import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = `http://ttsut.online/db/db.json`;
  constructor(
    private http: HttpService,
  ) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
