import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { AuthenticationService } from 'src/api/authentication/core/authentication.service';
import { AuthenticationDto } from 'src/api/authentication/data/authentication.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  async validateApplicationUser(
    dto: AuthenticationDto,
  ): Promise<ApplicationUser> {
    const applicationUser =
      await this.authenticationService.validateApplicationUser(dto);

    console.log(applicationUser);
    // if (!applicationUser) {
    //   throw new UnauthorizedException();
    // }

    return;
  }
}
