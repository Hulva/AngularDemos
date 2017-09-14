import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  apiRoot: string = 'http://httpbin.org';
  result: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGET() {
    console.log('GET');
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => this.result = JSON.stringify(res.json()));
  }

  doPOST() {
    console.log('POST');
  }

  doPUT() {

  }

  doDELETE() {

  }

  doGETAsPromise() {

  }

  doGETAsPromiseError() {

  }

  doGETAsObservableError() {

  }

  doGETWithHeaders() {

  }

}
