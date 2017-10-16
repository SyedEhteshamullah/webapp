import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechtalkDashboardComponent } from './techtalk-dashboard.component';

describe('TechtalkDashboardComponent', () => {
  let component: TechtalkDashboardComponent;
  let fixture: ComponentFixture<TechtalkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechtalkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechtalkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
