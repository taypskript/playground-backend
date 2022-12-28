import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationRoleModule } from './api/application-role/core/application-role.module';
import { ApplicationUserModule } from './api/application-user/core/application-user.module';
import { AuthenticationModule } from './api/authentication/core/authentication.module';
import { TypeOrmConfigService } from './configuration/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ApplicationRoleModule,
    ApplicationUserModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
