import { TestBed } from '@angular/core/testing';

import { Cart3Service } from './cart3.service';

describe('Cart3Service', () => {
  let service: Cart3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cart3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
