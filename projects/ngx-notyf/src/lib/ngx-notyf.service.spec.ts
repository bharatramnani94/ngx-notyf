import { TestBed } from '@angular/core/testing';

import { NgxNotyfService } from './ngx-notyf.service';

describe('NgxNotyfService', () => {
  let service: NgxNotyfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNotyfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
