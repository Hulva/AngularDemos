import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { SearchItem } from './search-item';
import {Observable} from 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { SearchWithObservableService } from './search-with-observable.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading: boolean = false;
  private loading1: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService, private itunes1: SearchWithObservableService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(_ => this.loading1 = true)
      .switchMap(term => this.itunes1.search(term))
      .do(_ => this.loading1 = false);
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => this.loading = false);
  }
}
