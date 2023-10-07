import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail001Component } from './detail001.component';

describe('Detail001Component', () => {
  let component: Detail001Component;
  let fixture: ComponentFixture<Detail001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail001Component]
    });
    fixture = TestBed.createComponent(Detail001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
