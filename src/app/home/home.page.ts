import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

export interface Data {
  image_url: string;
  percent: string;
  sum_one: string;
  term_to: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dataList = [];
  loader = true;
  constructor(
    private service: ApiService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().then((res: Data[]) => {
      this.loader = false;
      this.dataList = [];
      res.forEach((item, i) => {
        if (i % 2 !== 0) {
          const lastIndex = this.dataList.length - 1;
          this.dataList[lastIndex].push(item);
        } else {
          this.dataList.push([item]);
        }
      });
    });
  }

}
