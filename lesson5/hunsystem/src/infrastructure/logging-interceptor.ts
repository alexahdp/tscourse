import { CallHandler, ExecutionContext, Logger, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest();
    const start = Date.now();

    return next
      .handle()
      .pipe(
        // map(res => {
        //   console.log(res);
        //   return [{result: false}];
        // }),
        tap(() => {
          const end = Date.now();
          Logger.log(`${request.method} ${request.url} ${end - start}ms`);
        })
      )
  }
}