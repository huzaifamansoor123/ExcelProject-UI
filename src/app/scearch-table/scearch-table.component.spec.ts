import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScearchTableComponent } from './scearch-table.component';

describe('ScearchTableComponent', () => {
  let component: ScearchTableComponent;
  let fixture: ComponentFixture<ScearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScearchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
