import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail005Component } from './detail005.component';

describe('Detail005Component', () => {
  let component: Detail005Component;
  let fixture: ComponentFixture<Detail005Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail005Component]
    });
    fixture = TestBed.createComponent(Detail005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
