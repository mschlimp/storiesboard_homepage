import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlogEntry001Component } from './detail-blog-entry001.component';

describe('DetailBlogEntry001Component', () => {
  let component: DetailBlogEntry001Component;
  let fixture: ComponentFixture<DetailBlogEntry001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBlogEntry001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlogEntry001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
