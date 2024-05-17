import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DataEntity } from './entity/data';

@Controller('/data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  async create(@Body() data: Partial<DataEntity>): Promise<DataEntity> {
    return await this.appService.create(data);
  }
}
