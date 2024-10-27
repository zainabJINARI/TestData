import { TestBed } from '@angular/core/testing';

import { StudentServiceDataService } from './student-service-data.service';

describe('StudentServiceDataService', () => {
  let service: StudentServiceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
