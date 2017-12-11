import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../search/search-item';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { SearchJsonpService } from './search-jsonp.service';

@Component({
  selector: 'app-jsonp-demo',
  templateUrl: './jsonp-demo.component.html',
  styleUrls: ['./jsonp-demo.component.css']
})
export class JsonpDemoComponent implements OnInit {
  private loading = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchJsonpService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(_ => this.loading = false);
  }

}
