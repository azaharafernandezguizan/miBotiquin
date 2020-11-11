import { TestBed } from '@angular/core/testing';

import { MedicalItemsService } from './medical-items.service';

describe('MedicalItemsService', () => {
  let service: MedicalItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
