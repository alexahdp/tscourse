import { ApiProperty } from "@nestjs/swagger";

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
}