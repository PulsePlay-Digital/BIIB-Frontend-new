import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request)
    // request = request.clone({
    //   withCredentials: true,
    // });
    // return next.handle(request);

    const getToken: string | any = localStorage.getItem('token');
    let token = JSON.parse(getToken);

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }

    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            switch (event?.body?.status) {
              case 200:
                // this.notificationService.openSuccessSnackBar(event.body.message);
                break;
              case 422:
                // this.notificationService.openFailureSnackBar(event.body.message);
                break;
              case 500:
                // this.notificationService.openFailureSnackBar(event.body.message);
                break;
              case 404: 
                this.notificationService.openWarningAlert(event?.body.message);
            }
          }
          return event;
        }), catchError((error: HttpErrorResponse) => {
          return throwError(() => error?.message);
        })
        );
  }

}
