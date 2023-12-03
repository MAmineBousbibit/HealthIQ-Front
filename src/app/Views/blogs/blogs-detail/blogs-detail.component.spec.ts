import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsDetailComponent } from './blogs-detail.component';

describe('BlogsDetailComponent', () => {
  let component: BlogsDetailComponent;
  let fixture: ComponentFixture<BlogsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsDetailComponent]
    });
    fixture = TestBed.createComponent(BlogsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
