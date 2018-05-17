import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'luva-pages',
  template: `
    <luva-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </luva-layout>
  `
})
export class PagesComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
