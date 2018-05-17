import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'luva-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goHome() {}

  toggleSettings() {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  startSearch() {}
}
