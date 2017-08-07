import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Joke
} from '../../../share/classes/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() data: Joke;
  constructor() {}

  ngOnInit() {}

}
