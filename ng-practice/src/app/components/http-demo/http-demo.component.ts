import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http,
  URLSearchParams,
  Headers,
  RequestOptions
} from '@angular/http';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

  apiRoot = 'http://httpbin.org';
  result: string;

  constructor(private http: Http) {}

  ngOnInit() {}

  doGET() {
    console.log('GET');
    const url = `${this.apiRoot}/get`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.get(url, {
      search: search
    }).subscribe(res => this.result = res.json());
  }

  doPOST() {
    console.log('POST');
    const url = `${this.apiRoot}/post`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.post(url, {
      moo: 'foo',
      goo: 'loo'
    }, {
      search: search
    }).subscribe(res => this.result = res.json());
  }

  doPUT() {
    console.log('PUT');
    const url = `${this.apiRoot}/put`;
    const search = new URLSearchParams();
    search.set('foo', 'bar');
    search.set('limit', '25');
    this.http.put(url, {
      moo: 'foo',
      goo: 'loo'
    }, {
      search
    }).subscribe(res => this.result = res.json());
  }

  doDELETE() {
    console.log('DELETE');
    const url = `${this.apiRoot}/delete`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, {
      search: search
    }).subscribe(res => this.result = res.json());
  }

  doGETAsPromise() {
    console.log('GET AS PROMISE');
    const url = `${this.apiRoot}/get`;
    this.http.get(url)
        .toPromise()
        .then(res => this.result = res.json());
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
        .toPromise()
        .then(res => this.result = res.json(),
              msg => this.result = msg );
  }

  // doGETAsPromiseError() {
  //   console.log('GET AS PROMISE ERROR');
  //   const url = `${this.apiRoot}/post`;
  //   this.http.get(url)
  //       .toPromise()
  //       .then(res => this.result = res.json())
  //       .catch(msg => this.result = msg);
  // }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
        .subscribe(
          res => this.result = res.json(),
          msg => this.result = msg );
  }

  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
    const headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const opts = new RequestOptions();
    opts.headers = headers;
    const url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
      res => this.result = res.json(),
      msg => this.result = msg
    );
  }

}
