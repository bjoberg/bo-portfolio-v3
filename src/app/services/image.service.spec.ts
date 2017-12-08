import { TestBed, inject } from '@angular/core/testing';

import { PhotographyPortfolioService } from './photography-portfolio.service';

describe('PhotographyPortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotographyPortfolioService]
    });
  });

  it('should be created', inject([PhotographyPortfolioService], (service: PhotographyPortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
