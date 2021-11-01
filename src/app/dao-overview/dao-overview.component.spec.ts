import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaoOverviewComponent } from './dao-overview.component';

describe('DaoOverviewComponent', () => {
  let component: DaoOverviewComponent;
  let fixture: ComponentFixture<DaoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaoOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
