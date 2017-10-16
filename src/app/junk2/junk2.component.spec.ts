import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Junk2Component } from './junk2.component';

describe('Junk2Component', () => {
  let component: Junk2Component;
  let fixture: ComponentFixture<Junk2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Junk2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Junk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
