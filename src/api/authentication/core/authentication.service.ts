import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ApplicationUserService } from 'src/api/application-user/core/application-user.service';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly applicationUserService: ApplicationUserService,
    private readonly passwordHasService: PasswordHashService,
  ) {}

  async validateApplicationUser(
    userName: string,
    password: string,
  ): Promise<ApplicationUser> {
    try {
      const applicationUser = await this.applicationUserService.finduserName(
        userName,
      );
      const comparePassword = await this.passwordHasService.passwordCompare(
        password,
        applicationUser.password,
      );

      if (comparePassword === true) {
        return applicationUser;
      }

      return null;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
