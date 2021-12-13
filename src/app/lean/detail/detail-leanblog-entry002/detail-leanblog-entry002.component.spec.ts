import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLeanblogEntry002Component } from './detail-leanblog-entry002.component';

describe('DetailLeanblogEntry002Component', () => {
  let component: DetailLeanblogEntry002Component;
  let fixture: ComponentFixture<DetailLeanblogEntry002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLeanblogEntry002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLeanblogEntry002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
