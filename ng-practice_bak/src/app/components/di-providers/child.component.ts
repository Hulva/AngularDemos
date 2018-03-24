import { Component, OnInit } from '@angular/core';
import {SimpleService} from './simple.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
