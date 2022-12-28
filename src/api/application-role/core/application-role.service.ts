import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ApplicationRoleDto } from '../data/application-role.dto';
import { ApplicationRole } from '../data/application-role.entity';

@Injectable()
export class ApplicationRoleService {
  constructor(
    @InjectRepository(ApplicationRole)
    private readonly applicationRoleRepository: Repository<ApplicationRole>,
  ) {}

  async create(dto: ApplicationRoleDto): Promise<ApplicationRole> {
    try {
      return await this.applicationRoleRepository.save(dto);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<ApplicationRole[]> {
    try {
      return await this.applicationRoleRepository.find();
    } catch (error) {
      throw new error();
    }
  }

  async findOne(_id: string): Promise<ApplicationRole> {
    try {
      return await this.applicationRoleRepository.findOneByOrFail({ _id: _id });
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async update(_id: string, dto: ApplicationRoleDto): Promise<UpdateResult> {
    try {
      return this.applicationRoleRepository.update(_id, dto);
    } catch (error) {
      throw InternalServerErrorException;
    }
  }

  async remove(_id: string): Promise<DeleteResult> {
    try {
      return await this.applicationRoleRepository.delete(_id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
