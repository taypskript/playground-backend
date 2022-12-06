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
import { ApplicationUserDto } from '../data/application-user.dto';
import { ApplicationUser } from '../data/application-user.entity';
import { ApplicationUserService } from './application-user.service';

@Controller('application-user')
export class ApplicationUserController {
  constructor(
    private readonly applicationUserService: ApplicationUserService,
  ) {}

  @Post()
  async create(@Body() dto: ApplicationUserDto): Promise<ApplicationUser> {
    return await this.applicationUserService.create(dto);
  }

  @Get()
  async findAll(): Promise<ApplicationUser[]> {
    return await this.applicationUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<ApplicationUser> {
    return await this.applicationUserService.findOne(_id);
  }

  @Put(':id')
  update(
    @Param('id') _id: string,
    @Body() dto: ApplicationUserDto,
  ): Promise<UpdateResult> {
    return this.applicationUserService.update(_id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') _id: string): Promise<DeleteResult> {
    return this.applicationUserService.remove(_id);
  }
}
