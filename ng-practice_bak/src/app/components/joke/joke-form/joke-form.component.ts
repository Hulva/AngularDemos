import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Joke
} from '../../../share/classes/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.native
  // encapsulation: ViewEncapsulation.None
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter < Joke > ();
  constructor() {}

  ngOnInit() {}
  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
