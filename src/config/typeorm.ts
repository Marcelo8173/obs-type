import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

console.log('process.env.DATABASE_URL_BASE', process.env.DATABASE_URL_BASE);

const config = {
  type: 'postgres',
  host: 'ec2-44-215-176-210.compute-1.amazonaws.com',
  port: 5432,
  username: 'dzuvfrwusiegqm',
  password: '8e508fc2e58e6389b3981f9585b3886392788c6d8e920d88d7e8759b54cf110f',
  database: 'd2la80mehhl8mc',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*.js'],
  autoLoadEntities: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
