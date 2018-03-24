import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpDemoComponent } from './jsonp-demo.component';

describe('JsonpDemoComponent', () => {
  let component: JsonpDemoComponent;
  let fixture: ComponentFixture<JsonpDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonpDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
