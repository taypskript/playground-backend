import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';
import { ApplicationUserModule } from 'src/api/application-user/core/application-user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/common/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants';
import { JwtStrategy } from 'src/common/strategies/jwt.strategy';

@Module({
  imports: [
    ApplicationUserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    AuthenticationService,
    PasswordHashService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
