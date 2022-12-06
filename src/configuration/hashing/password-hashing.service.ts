import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordHashService {
  async passwordHash(password: string) {
    try {
      const saltOrRounds = 10;
      const salt = bcrypt.genSaltSync(saltOrRounds);
      const hashPassword = bcrypt.hashSync(password, salt);
      return hashPassword;
    } catch (error) {
      console.log(error);
    }
  }

  async passwordCompare(password: string) {
    try {
      const saltOrRounds = 10;
      const salt = bcrypt.genSaltSync(saltOrRounds);
      const hashPassword = bcrypt.hashSync(password, salt);
      const result = await bcrypt.compare(password, hashPassword);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
