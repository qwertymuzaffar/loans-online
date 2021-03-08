import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(
      private http: HttpClient,
      private httpIonic: HTTP,
      private platform: Platform
    ) {
    }

    public get(url: string) {
      return this.httpIonic.get(url, {}, {})
        .then(res => JSON.parse(res.data));
    }

    public post(url, body) {
      return this.httpIonic.post(url, body, {})
        .then(res => JSON.parse(res.data));
    }

    public put(url, body?: any) {
      return this.httpIonic.put(url, body, {})
        .then(res => JSON.parse(res.data));
    }

    public delete(url) {
      return this.httpIonic.delete(url, {}, {})
        .then(res => JSON.parse(res.data));
    }
}
