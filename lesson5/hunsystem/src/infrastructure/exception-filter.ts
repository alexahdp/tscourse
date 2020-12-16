import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let resultStatus;
    let result;
    if (
      exception?.message?.message &&
      Array.isArray(exception.message.message) &&
      exception.message.message[0] instanceof ValidationError
    ) {
      resultStatus = HttpStatus.BAD_REQUEST;
      result = this.convertValidationError(exception.message.message)
    } else if (exception.getStatus) {
      resultStatus = exception.getStatus();
      result = { reason: exception.message };
    } else {
      resultStatus = HttpStatus.INTERNAL_SERVER_ERROR;
      result = { error: 'Internal server error' };
    }
    
    Logger.log({
      msg: exception.message,
      error: exception,
    });

    response
      .status(resultStatus)
      .json(result);
  }


  convertValidationError(err: ValidationError[]) {
    const result: { [k: string]: string | object } = {};
    for (let prop of err) {
      if (prop.constraints) {
        result[prop.property] = Object.values(prop.constraints)[0];
      } else {
        result[prop.property] = this.convertValidationError(prop.children);
      }
    }
    return result;
  }
}