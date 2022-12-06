import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationUserModule } from './api/application-user';
import { TypeOrmConfigService } from './configuration/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ApplicationUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
