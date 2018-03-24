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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() searchTermChanged = new EventEmitter < SearchTerm > ();
  constructor() {}

  ngOnInit() {}

}
