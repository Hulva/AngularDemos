import { Component, OnInit } from '@angular/core';
import {Joke} from '../share/classes/joke';

@Component({
  selector: 'app-joke-demo',
  templateUrl: './joke-demo.component.html',
  styles: []
})
export class JokeDemoComponent implements OnInit {
  joke: Joke = new Joke('A kid threw a lump of cheddar at me', 'I thought');
  constructor() { }

  ngOnInit() {
  }

}
