import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Data')
export class DataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  Abrigo: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  telefone: string;

  @Column({ type: 'varchar' })
  idade: string;

  @Column({ type: 'varchar' })
  paridade_g: string;

  @Column({ type: 'varchar' })
  paridade_a: string;

  @Column({ type: 'varchar' })
  paridade_pn: string;

  @Column({ type: 'varchar' })
  paridade_c: string;

  @Column({ type: 'varchar' })
  dpp_av: string;

  @Column({ type: 'varchar' })
  ubs_ref: string;

  @Column({ type: 'varchar' })
  comorbidades: string;

  @Column({ type: 'varchar' })
  medicacoes: string;

  @Column({ type: 'varchar' })
  risco: string;

  @Column({ type: 'varchar' })
  risco_descricao: string;

  @Column({ type: 'varchar' })
  abrigada_com: string;

  @Column({ type: 'varchar' })
  encaminhamento: string;

  @Column({ type: 'varchar' })
  obs: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}
