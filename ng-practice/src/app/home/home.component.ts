import { Component, OnInit, ViewChild, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import * as Muuri from 'Muuri';
import { environment } from '../../environments/environment';
import { Demo } from '../shared/classes/demo';

@Component({
  selector: 'luva-practice-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('kanban')
  kanban: ElementRef;

  @ViewChild('board')
  board: ElementRef;

  itemContainers: any;

  columnGrids = [];

  dragCounter = 0;

  boardGrid: any;

  demos: Array<Demo>;

  constructor() {
    this.demos = [];
    environment.demoList
      .forEach(demo => this.demos.push(new Demo(Date.now(), demo.link, demo.displayValue)));
  }

  ngOnInit() {
    this.itemContainers = this.kanban.nativeElement.querySelectorAll('.board-column-content');
  }

  ngAfterViewInit() {
    this.init();
  }

  init(): void {
    this.itemContainers.forEach(container => {
      this.boardGrid = new Muuri(this.board.nativeElement, {
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragSortInterval: 0,
        dragStartPredicate: {
          handle: '.board-column-header'
        },
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
      });

      const muuri = new Muuri(container, {
        items: '.board-item',
        layoutDuration: 400,
        layoutEasing: 'ease',
        dragEnabled: true,
        dragStartPredicate: {
          handle: '.board-item-header'
        },
        dragSort: () => {
          return this.columnGrids;
        },
        dragSortInterval: 0,
        dragContainer: document.body,
        dragReleaseDuration: 400,
        dragReleaseEasing: 'ease'
      })
      .on('dragStart', (item) => {
        this.dragCounter = this.dragCounter + 1;
        document.documentElement.classList.add('dragging');
        item.getElement().style.width = item.getWidth() + 'px';
        item.getElement().style.height = item.getHeight() + 'px';
      })
      .on('dragEnd', (item) => {
        this.dragCounter = this.dragCounter - 1;
        if (this.dragCounter < 1) {
          document.documentElement.classList.remove('dragging');
        }
      })
      .on('dragReleaseEnd', (item) => {
        item.getElement().style.width = '';
        item.getElement().style.height = '';
        this.columnGrids.forEach(function (_muuri) {
          _muuri.refreshItems();
        });
      })
      .on('layoutStart', () => {
        this.boardGrid.refreshItems().layout();
      });
      this.columnGrids.push(muuri);
    });
  }

}
