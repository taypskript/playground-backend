import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: '172.18.0.2',
      port: 3306,
      username: 'root',
      password: 'notSecureChangeMe',
      database: 'playground_db',
      synchronize: true,
      retryAttempts: 10,
      retryDelay: 3000,
      autoLoadEntities: true,
      logging: true,
    };
  }
}
