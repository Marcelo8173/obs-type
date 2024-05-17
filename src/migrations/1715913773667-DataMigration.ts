import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class DataMigration1715913773667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Abrigo',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'idade',
            type: 'varchar',
          },
          {
            name: 'paridade_g',
            type: 'varchar',
          },
          {
            name: 'paridade_a',
            type: 'varchar',
          },
          {
            name: 'paridade_pn',
            type: 'varchar',
          },
          {
            name: 'paridade_c',
            type: 'varchar',
          },
          {
            name: 'dpp_av',
            type: 'varchar',
          },
          {
            name: 'ubs_ref',
            type: 'varchar',
          },
          {
            name: 'comorbidades',
            type: 'varchar',
          },
          {
            name: 'medicacoes',
            type: 'varchar',
          },
          {
            name: 'risco',
            type: 'varchar',
          },
          {
            name: 'risco_descricao',
            type: 'varchar',
          },
          {
            name: 'abrigada_com',
            type: 'varchar',
          },
          {
            name: 'encaminhamento',
            type: 'varchar',
          },
          {
            name: 'obs',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Data');
  }
}
