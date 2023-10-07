import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail003Component } from './detail003.component';

describe('Detail003Component', () => {
  let component: Detail003Component;
  let fixture: ComponentFixture<Detail003Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail003Component]
    });
    fixture = TestBed.createComponent(Detail003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
