import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail002Component } from './detail002.component';

describe('Detail002Component', () => {
  let component: Detail002Component;
  let fixture: ComponentFixture<Detail002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail002Component]
    });
    fixture = TestBed.createComponent(Detail002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
