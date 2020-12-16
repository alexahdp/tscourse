import { ApiProperty } from "@nestjs/swagger";
import { EntityConflictError } from "src/errors/entity-conflict-error";

const userList: User[] = [];

export class User {
  @ApiProperty()
  public username: string;
  
  @ApiProperty()
  public email: string;

  @ApiProperty({ type: Date })
  public createdAt?: Date;
  
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }

  static find(): Promise<User[]> {
    return Promise.resolve(userList);
  }

  async save() {
    for (let user of userList) {
      if (user.email === this.email) {
        throw new EntityConflictError('Email is alredy used');
      }
    }
    userList.push(this);
    return Promise.resolve(this);
  }
}