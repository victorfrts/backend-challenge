import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({length: 11})
  cpf: string;

  @Column({length: 64, nullable: false})
  name: string;

  @Column({length: 15, nullable: false})
  telefone: string;

  @Column({length: 8, nullable: false})
  cep: string;

  @Column({length: 64, nullable: true})
  logradouro: string;

  @Column({length: 64, nullable: false})
  cidade: string;

  @Column({length: 64, nullable: false})
  estado: string;

}