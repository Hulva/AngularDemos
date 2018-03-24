import { Component, OnInit } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';

@Component({
  selector: 'app-elasticsearch-demo',
  templateUrl: './elasticsearch-demo.component.html',
  styleUrls: ['./elasticsearch-demo.component.css']
})
export class ElasticsearchDemoComponent implements OnInit {

  isConnected = false;
  status: string;

  constructor(private esService: ElasticsearchService) { }

  ngOnInit() {
    this.esService.isAvailable().then(
      result => {
        console.log('es available check', result);
        this.status = 'OK';
        this.isConnected = true;
      },
      error => {
        console.error('es available check', error);
        this.status = 'NOT OK';
        this.isConnected = false;
      }
    );
  }

  createIndex(index: string) {
    this.esService.createIndex(index);
  }

  fullTextSearch($event) {
    this.esService.fullTextSearch('chickling-kmanager-2017-09-16', 'Jmx-Test', 'metric', $event.target.value).then(
        response => {
          console.log(response);
        }
      );
  }
}
