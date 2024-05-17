import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataEntity } from './entity/data'; // Importe sua entidade aqui

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(DataEntity)
    private readonly DataEntityRepository: Repository<DataEntity>,
  ) {}

  async findAll(): Promise<DataEntity[]> {
    return await this.DataEntityRepository.find();
  }

  async create(data: Partial<DataEntity>): Promise<DataEntity> {
    const pessoa = await this.DataEntityRepository.create(data);
    return await this.DataEntityRepository.save(pessoa);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
