import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
      const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
      const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser && currentUser.token) {
        const token: string = currentUser.token;
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(request);
      }
      return next.handle(request);
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
