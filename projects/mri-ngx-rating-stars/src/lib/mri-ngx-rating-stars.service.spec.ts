import { TestBed } from '@angular/core/testing';

import { MriNgxRatingStarsService } from './mri-ngx-rating-stars.service';

describe('MriNgxRatingStarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MriNgxRatingStarsService = TestBed.get(MriNgxRatingStarsService);
    expect(service).toBeTruthy();
  });
});
