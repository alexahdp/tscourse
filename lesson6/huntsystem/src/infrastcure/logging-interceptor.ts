import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    console.log('Interceptor in')
    const request: Request = context.switchToHttp().getRequest();
    const start = Date.now();

    return next.handle()
      .pipe(
        catchError(err => {
          const end = Date.now();
          Logger.log(`${request.method} ${request.url} ${end - start}`);
          return throwError(err);
        }),
        tap((response) => {
          console.log(response)
          const end = Date.now();
          Logger.log(`${request.method} ${request.url} ${end - start}`);
        })
      );
  }
}
