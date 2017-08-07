import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  SearchTerm
} from '../../share/classes/search-term';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() loginChanged = new EventEmitter < SearchTerm > ();
  constructor() {}

  ngOnInit() {
  }

}
