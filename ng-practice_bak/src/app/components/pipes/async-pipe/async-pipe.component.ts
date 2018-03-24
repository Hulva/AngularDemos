import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Observable
} from "rxjs/Rx";

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit, OnDestroy {
  imageUrl: string = ""; 
  // >>>>
  promiseData: string;

  promise: Promise < string > ;
  // <<<<

  // >>>
  observableData: number;
  subscription: any = null;

  observable: Observable < number > ;
  //<<<
  constructor() {
    this.getPromise().then(v => this.promiseData = v);
    this.promise = this.getPromise();

    this.subscribeObservable();
    this.observable = this.getObservable();
  }

  ngOnInit() {}
  getPromise(): Promise < string > {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise Complete!"), 3000);
    });
  }

  getObservable() {
    return Observable.interval(1000).take(10).map((v) => v * v);
  }
  subscribeObservable() {
    this.subscription = this.getObservable().subscribe(v => this.observableData = v);
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
