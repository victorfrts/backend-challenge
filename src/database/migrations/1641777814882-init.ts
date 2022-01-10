import {MigrationInterface, QueryRunner} from "typeorm";

export class init1641777814882 implements MigrationInterface {
    name = 'init1641777814882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("cpf" character varying(11) NOT NULL, "name" character varying(64) NOT NULL, "telefone" character varying(15) NOT NULL, "cep" character varying(8) NOT NULL, "logradouro" character varying(64), "cidade" character varying(64) NOT NULL, "estado" character varying(64) NOT NULL, CONSTRAINT "PK_a6235b5ef0939d8deaad755fc87" PRIMARY KEY ("cpf"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
