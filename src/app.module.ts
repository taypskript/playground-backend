import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationUserModule } from './api/application-user/core/application-user.module';
import { AuthenticationModule } from './api/authentication/core/authentication.module';
import { TypeOrmConfigService } from './configuration/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ApplicationUserModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
