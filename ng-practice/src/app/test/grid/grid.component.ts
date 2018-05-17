import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import * as Muuri from 'Muuri';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-muuri-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, AfterViewInit {
  searchField: FormControl;

  private docElem = document.documentElement;
  private grid: any;

  @ViewChild('grid')
  private gridDemo: ElementRef;

  private gridEle: any;
  private addItemsElement: any;
  private characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private filterOptions = ['red', 'blue', 'green'];
  private dragOrder = [];
  private uuid = 0;

  private dragCounter = 0;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.gridEle = this.gridDemo.nativeElement.querySelector('.grid');
    this.initGrid();
  }

  ngAfterViewInit() {
    this.init();
  }

  private init() {

  }

  private initGrid() {
    this.grid = new Muuri(this.gridEle, {
      items: this.generateElements(20),
      layoutDuration: 400,
      layoutEasing: 'ease',
      dragEnabled: true,
      dragSortInterval: 50,
      dragContainer: document.body,
      dragStartPredicate: {
        distance: 0,
        delay: 0,
        handle: false
      },
      // dragStartPredicate: (item, event) => {
        // const isDraggable = this.sortFieldValue === 'order';
        // const isRemoveAction = this.elementMatches(event.target, '.card-remove, .card-remove i');
        // return isDraggable && !isRemoveAction ? Muuri.ItemDrag.defaultStartPredicate(item, event) : false;
      // },
      dragReleaseDuration: 400,
      dragReleseEasing: 'ease'
    })
    .on('dragStart', () => {
      ++this.dragCounter;
      this.docElem.classList.add('dragging');
    })
    .on('dragEnd', () => {
      if (--this.dragCounter < 1) {
        this.docElem.classList.remove('dragging');
      }
    })
    .on('move', () => this.updateIndices())
    .on('sort', () => this.updateIndices());
  }

  private updateIndices() {
    this.grid.getItems().forEach((item, i) => {
      item.getElement().setAttribute('data-id', i + 1);
      item.getElement().querySelector('.card-id').innerHTML = i + 1;
    });
  }

  private generateElements(amount: number): Array<HTMLElement> {
    const ret = [];
    for (let i = 0; i < amount; i++) {
      ret.push(this.generateElement(
        ++this.uuid,
        this.generateRandomWord(2),
        this.getRandomItem(this.filterOptions),
        this.getRandomInt(1, 2),
        this.getRandomInt(1, 2)
      ));
    }

    return ret;
  }

  private generateElement(id, title, color, width, height): Node {
    const itemEle = document.createElement('div');
    const classNames = `item h${height} w${width} ${color}`;
    const itemTemplate = '' +
              '<div class="' + classNames + '" data-id="' + id + '" data-color="' + color + '" data-title="' + title + '">' +
                '<div class="item-content">' +
                  '<div class="card">' +
                    '<div class="card-id">' + id + '</div>' +
                    '<div class="card-title">' + title + '</div>' +
                    '<div class="card-remove"><i class="material-icons">&#xE5CD;</i></div>' +
                  '</div>' +
                '</div>' +
              '</div>';
    itemEle.innerHTML = itemTemplate;
    return itemEle.firstChild;
  }

  private getRandomItem(collection): any {
    return collection[Math.floor(Math.random() * collection.length)];
  }

  private getRandomInt(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private generateRandomWord(length): string {
    let ret = '';
    for (let i = 0; i < length; i++) {
      ret += this.getRandomItem(this.characters);
    }
    return ret;
  }

  private elementMatches(element, selector): boolean {
    const p = Element.prototype;
    return (p.matches || p.msMatchesSelector || p.webkitMatchesSelector || p.msMatchesSelector).call(element, selector);
  }

  private elementClosest(element, selector): Node {
    if (window['Element'] && !Element.prototype.closest) {
      let isMatch = this.elementMatches(element, selector);
      while (!isMatch && element && element !== document) {
        element = element.parentNode;
        isMatch = element && element !== document && this.elementMatches(element, selector);
      }
      return element && element !== document ? element : null;
    } else {
      return element.closest(selector);
    }
  }

  addItems() {
    const newElems = this.generateElements(5);
    // Set the display of the new elements to "none" so it will be hidden by default.
    newElems.forEach(item => item.style.display = 'none');
    // Add the elements to the grid
    const newItems = this.grid.add(newElems);

    // Update UI indices
    this.updateIndices();

    // Sort the items only if the drag sorting is not active.
    // if (this.sortFieldValue !== 'order') {
    //   this.grid.sort(this.sortFieldValue === 'title' ? this.compareItemTitle : this.compareItemColor);
    //   this.dragOrder = this.dragOrder.concat(newItems);
    // }

    // Finally filter the items.
    this.doFilter();
  }

  private doFilter() {
    // this.filterFieldValue = this.filterField.value;
    // this.grid.filter(function (item) {
    //   const element = item.getElement();
    //   const isSearchMatch = !this.searchFieldValue ? true
    //         : (element.getAttribute('data-title') || '').toLowerCase().indexOf(this.searchFieldValue) > -1;
    //   const isFilterMatch = !this.filterFieldValue ? true : (element.getAttribute('data-color') || '') === filterFieldValue;
    //   return isSearchMatch && isFilterMatch;
    // });
  }

  private compareItemTitle(a, b): number {
    const aVal = a.getElement().getAttribute('data-title') || '';
    const bVal = b.getElement().getAttribute('data-title') || '';
    return aVal < bVal ? -1 : (aVal > bVal ? 1 : 0);
  }

  private compareItemColor(a, b): number {
    const aVal = a.getElement().getAttribute('data-color') || '';
    const bVal = b.getElement().getAttribute('data-color') || '';
    return aVal < bVal ? -1 : aVal > bVal ? 1 : this.compareItemTitle(a, b);
  }
}
