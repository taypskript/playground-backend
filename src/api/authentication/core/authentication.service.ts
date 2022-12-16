import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ApplicationUserService } from 'src/api/application-user/core/application-user.service';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';
import { AuthenticationDto } from '../data/authentication.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly applicationUserService: ApplicationUserService,
    private readonly passwordHasService: PasswordHashService,
  ) {}

  async validateApplicationUser(
    dto: AuthenticationDto,
  ): Promise<ApplicationUser> {
    try {
      const { userName, password } = dto;
      const applicationUser = await this.applicationUserService.finduserName(
        userName,
      );
      const comparePassword = await this.passwordHasService.passwordCompare(
        password,
        applicationUser.password,
      );

      console.log(applicationUser);

      if (comparePassword === true) {
        return applicationUser;
      }
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
