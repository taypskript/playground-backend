import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async validateApplicationUser(@Request() request): Promise<ApplicationUser> {
    return await request.user;
  }
}
