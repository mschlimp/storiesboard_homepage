import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail004Component } from './detail004.component';

describe('Detail004Component', () => {
  let component: Detail004Component;
  let fixture: ComponentFixture<Detail004Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail004Component]
    });
    fixture = TestBed.createComponent(Detail004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
