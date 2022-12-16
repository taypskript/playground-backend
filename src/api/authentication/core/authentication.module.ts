import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';
import { PassportModule } from '@nestjs/passport';
import { ApplicationUserModule } from 'src/api/application-user/core/application-user.module';
import { LocalStrategy } from 'src/common/strategies/local.strategy';

@Module({
  imports: [ApplicationUserModule, PassportModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PasswordHashService, LocalStrategy],
})
export class AuthenticationModule {}
