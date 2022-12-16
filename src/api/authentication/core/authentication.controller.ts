import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApplicationUser } from 'src/api/application-user/data/application-user.entity';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { AuthenticationDto } from '../data/authentication.dto';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async validateApplicationUser(
    @Body() dto: AuthenticationDto,
  ): Promise<ApplicationUser> {
    return await this.authenticationService.validateApplicationUser(dto);
  }
}
