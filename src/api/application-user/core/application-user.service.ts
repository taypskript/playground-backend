import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PasswordHashService } from 'src/configuration/hashing/password-hashing.service';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ApplicationUserDto } from '../data/application-user.dto';
import { ApplicationUser } from '../data/application-user.entity';

@Injectable()
export class ApplicationUserService {
  constructor(
    @InjectRepository(ApplicationUser)
    private readonly applicationUserRepository: Repository<ApplicationUser>,
    private readonly passwordHashService: PasswordHashService,
  ) {}

  async create(dto: ApplicationUserDto): Promise<ApplicationUser> {
    try {
      const password = await this.passwordHashService.passwordHash(
        dto.password,
      );
      return await this.applicationUserRepository.save({ ...dto, password });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<ApplicationUser[]> {
    try {
      return await this.applicationUserRepository.find();
    } catch (error) {
      throw new error();
    }
  }

  async findOne(_id: string): Promise<ApplicationUser> {
    try {
      return await this.applicationUserRepository.findOneByOrFail({ _id: _id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(_id: string, dto: ApplicationUserDto): Promise<UpdateResult> {
    try {
      return this.applicationUserRepository.update(_id, dto);
    } catch (error) {
      throw InternalServerErrorException;
    }
  }

  async remove(_id: string): Promise<DeleteResult> {
    try {
      return await this.applicationUserRepository.delete(_id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async finduserName(userName: string): Promise<ApplicationUser> {
    try {
      return await this.applicationUserRepository.findOneByOrFail({ userName });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
