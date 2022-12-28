import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ApplicationRoleDto } from '../data/application-role.dto';
import { ApplicationRole } from '../data/application-role.entity';
import { ApplicationRoleService } from './application-role.service';

@Controller('application-roles')
export class ApplicationRoleController {
  constructor(
    private readonly applicationRoleService: ApplicationRoleService,
  ) {}

  @Post()
  async create(@Body() dto: ApplicationRoleDto): Promise<ApplicationRole> {
    return await this.applicationRoleService.create(dto);
  }

  @Get()
  async findAll(): Promise<ApplicationRole[]> {
    return await this.applicationRoleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<ApplicationRole> {
    return await this.applicationRoleService.findOne(_id);
  }

  @Put(':id')
  update(
    @Param('id') _id: string,
    @Body() dto: ApplicationRoleDto,
  ): Promise<UpdateResult> {
    return this.applicationRoleService.update(_id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') _id: string): Promise<DeleteResult> {
    return this.applicationRoleService.remove(_id);
  }
}
