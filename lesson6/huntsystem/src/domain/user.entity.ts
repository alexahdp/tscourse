import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, pre, prop } from "@typegoose/typegoose";
import { Exclude } from "class-transformer";
import * as crypto from 'crypto'

@modelOptions({
  schemaOptions: {
    optimisticConcurrency: true,
    timestamps: true,
  }
})
export class User {
  @ApiProperty()
  @prop({ type: String, index: true, unique: true })
  email: string;

  @Exclude()
  password: string;

  @Exclude()
  salt: string;

  @ApiProperty()
  @prop({ type: String, index: true, unique: true })
  username: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  setPassword(password: string) {
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.password = crypto.pbkdf2Sync(
      password,
      this.salt,
      1000,
      64,
      `sha512`
    ).toString(`hex`); 
  }

  validatePassword(password: string) {
    const hash = crypto.pbkdf2Sync(
      password,  
      this.salt,
      1000,
      64,
      `sha512`
    ).toString(`hex`); 
    return this.password === hash;
  }
}

