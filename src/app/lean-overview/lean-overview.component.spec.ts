import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanOverviewComponent } from './lean-overview.component';

describe('LeanOverviewComponent', () => {
  let component: LeanOverviewComponent;
  let fixture: ComponentFixture<LeanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
