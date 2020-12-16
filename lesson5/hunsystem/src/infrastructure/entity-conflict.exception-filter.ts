import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { EntityConflictError } from '../errors/entity-conflict-error';

@Catch(EntityConflictError)
export class EntityConflictExceptionFilter implements ExceptionFilter {
  catch(exception: EntityConflictError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.statusCode = HttpStatus.CONFLICT;
    response.send({
        statusCode: HttpStatus.CONFLICT,
        message: exception.message
    });
  }
}