import { TestBed } from '@angular/core/testing';

import { AppFacade } from './app.facade';

describe('AppFacade', () => {
  let service: AppFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
