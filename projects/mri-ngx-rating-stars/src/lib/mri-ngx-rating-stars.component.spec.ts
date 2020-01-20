import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MriNgxRatingStarsComponent } from './mri-ngx-rating-stars.component';

describe('MriNgxRatingStarsComponent', () => {
  let component: MriNgxRatingStarsComponent;
  let fixture: ComponentFixture<MriNgxRatingStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MriNgxRatingStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MriNgxRatingStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
