import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLeanblogEntry002Component } from './short-leanblog-entry002.component';

describe('ShortLeanblogEntry002Component', () => {
  let component: ShortLeanblogEntry002Component;
  let fixture: ComponentFixture<ShortLeanblogEntry002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLeanblogEntry002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortLeanblogEntry002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
