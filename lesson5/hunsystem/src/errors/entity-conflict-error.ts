export class EntityConflictError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}