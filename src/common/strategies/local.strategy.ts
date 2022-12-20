import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { AuthenticationService } from 'src/api/authentication/core/authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  async validate(username: string, password: string): Promise<ApplicationUser> {
    const applicationUser =
      await this.authenticationService.validateApplicationUser(
        username,
        password,
      );

    if (!applicationUser) {
      throw new UnauthorizedException();
    }

    return applicationUser;
  }
}
