import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashService {
  async passwordHash(password: string): Promise<string> {
    try {
      const saltOrRounds = 10;
      const salt = bcrypt.genSaltSync(saltOrRounds);
      const hashPassword = bcrypt.hashSync(password, salt);
      return hashPassword;
    } catch (error) {
      console.log(error);
    }
  }

  async passwordCompare(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    try {
      const result = await bcrypt.compare(password, hashPassword);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
