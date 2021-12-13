import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBlogEntry001Component } from './short-blog-entry001.component';

describe('ShortBlogEntry001Component', () => {
  let component: ShortBlogEntry001Component;
  let fixture: ComponentFixture<ShortBlogEntry001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortBlogEntry001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBlogEntry001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
