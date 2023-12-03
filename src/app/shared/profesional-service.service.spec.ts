import { TestBed } from '@angular/core/testing';

import { ProfesionalServiceService } from './profesional-service.service';

describe('ProfesionalServiceService', () => {
  let service: ProfesionalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesionalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
