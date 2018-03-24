import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {

  searchField: FormControl;
  searches: string[] = [];

  searchField1: FormControl;
  searches1: string[] = [];

  constructor() {  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges.subscribe(term => {
      this.searches.push(term);
    });

    this.searchField1 = new FormControl();
    this.searchField1.valueChanges
                      .debounceTime(500)
                      .distinctUntilChanged() // only publish to its output stream if the value being published is different from before
                      .subscribe(term => {
      this.searches1.push(term);
    });
  }

}
