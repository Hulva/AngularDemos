import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticsearchDemoComponent } from './elasticsearch-demo.component';

describe('ElasticsearchDemoComponent', () => {
  let component: ElasticsearchDemoComponent;
  let fixture: ComponentFixture<ElasticsearchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticsearchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticsearchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
