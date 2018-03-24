import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
QueryList,
ElementRef,
ContentChild,
AfterContentInit,
ContentChildren
} from '@angular/core';
import {
  Joke
} from '../../../share/classes/joke';
import {
  JokeComponent
} from "../joke/joke.component";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit,AfterContentInit {
  jokes: Joke[];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList < JokeComponent > ;
  @ViewChild("header") headerRef: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;
  @ContentChildren(JokeComponent) jokeContentChildren: QueryList < JokeComponent > ;
  constructor() {
    console.log("Constructor");
    console.log(this.jokeViewChild);
  }

  ngOnInit() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror', 'Hello-me(Halloumi)'),
      new Joke('What did the cheese do you use to disguise a horse', 'Mask-a-pony(Mascarpone)'),
      new Joke('A kind of threw a lump of cheddar at me', 'I thought That is not very mature')
    ];
  }
  addJoke(joke) {
    this.jokes.unshift(joke);
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("AfterViewInit");
    console.log(this.jokeViewChild);
    console.log("jokes: ");
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log(this.headerRef);
    this.headerRef.nativeElement.textContent = "Best Joke Machine";
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit-->");
    console.log(this.jokeContentChild);   
    console.log(this.jokeContentChildren.toArray());
     
  }
}
