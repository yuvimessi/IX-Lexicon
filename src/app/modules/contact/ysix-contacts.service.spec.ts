import { TestBed } from '@angular/core/testing';

import { YsixContactsService } from './ysix-contacts.service';

describe('YsixContactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YsixContactsService = TestBed.get(YsixContactsService);
    expect(service).toBeTruthy();
  });
});
