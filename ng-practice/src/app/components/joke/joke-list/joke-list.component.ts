import {
  Component,
  OnInit
} from '@angular/core';
import {
  Joke
} from '../../../share/classes/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror', 'Hello-me(Halloumi)'),
      new Joke('What did the cheese do you use to disguise a horse', 'Mask-a-pony(Mascarpone)'),
      new Joke('A kind of threw a lump of cheddar at me', 'I thought That is not very mature')
    ];
  }

  ngOnInit() {}
  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}
