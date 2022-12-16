import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';
import { ApplicationUser } from '../data/application-user.entity';
import { ApplicationUserController } from './application-user.controller';
import { ApplicationUserService } from './application-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationUser])],
  controllers: [ApplicationUserController],
  providers: [ApplicationUserService, PasswordHashService],
  exports: [ApplicationUserService],
})
export class ApplicationUserModule {}
