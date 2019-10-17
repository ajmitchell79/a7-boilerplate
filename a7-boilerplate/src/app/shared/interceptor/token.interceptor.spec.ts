import { TestBed, async, inject } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient, HttpHandler,HttpBackend } from '@angular/common/http';

describe('Token Interceptor ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor,HttpClient, HttpHandler,HttpBackend ,AuthenticationService]
    });
  });

  it('should ...', inject([TokenInterceptor], (guard: TokenInterceptor) => {
    expect(guard).toBeTruthy();
  }));
});
