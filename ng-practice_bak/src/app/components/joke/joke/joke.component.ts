import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {
  Joke
} from '../../../share/classes/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, OnDestroy {
  @Input() data: Joke;
  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add 'implements OnChanges' to the class.
    for (var key in changes) {
      console.log(key);

      console.log("changed. ");
      console.log("Current: ");
      console.log(changes[key].currentValue);
      console.log("Previous: ");
      console.log(changes[key].previousValue);

    }
    console.log(`ngOnChanges - data is ${this.data}`);
    console.log(this.data);
    console.log(`changes: ${changes}`);
    console.log(changes);
  }

  ngOnInit() {
    console.log(`ngOnInit - data is `);
    console.log(this.data);
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck");

  }
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit");
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy");

  }
}
