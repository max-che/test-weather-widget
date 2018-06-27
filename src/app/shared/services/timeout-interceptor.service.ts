import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http/src/response';
import { Observable } from 'rxjs';
import { HttpRequest } from '@angular/common/http/src/request';
import { HttpHandler } from '@angular/common/http/src/backend';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class TimeoutInterceptor implements HttpInterceptor {

	intercept(req: HttpRequest<{}>, next: HttpHandler): Observable<HttpEvent<{}>> {
		return next.handle(req).pipe(delay(2000));
	}
}
