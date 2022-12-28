import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationRole } from '../data/application-role.entity';
import { ApplicationRoleController } from './application-role.controller';
import { ApplicationRoleService } from './application-role.service';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationRole])],
  controllers: [ApplicationRoleController],
  providers: [ApplicationRoleService],
})
export class ApplicationRoleModule {}
