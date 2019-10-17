import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';
import { ConfigService } from './config.service';
import { AuthenticationService } from './authentication.service';

describe('ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[HttpClient, HttpHandler,HttpBackend,AuthenticationService ]
  }));

  it('should be created', () => {
    const service: ConfigService = TestBed.get(ConfigService);
    expect(service).toBeTruthy();
  });
});
