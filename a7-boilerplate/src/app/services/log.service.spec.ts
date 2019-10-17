import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

import { LogService } from './log.service';

describe('LogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient, HttpHandler,HttpBackend,AuthenticationService ]
  }));

  it('should be created', () => {
    const service: LogService = TestBed.get(LogService);
    expect(service).toBeTruthy();
  });
});
