import {MigrationInterface, QueryRunner} from "typeorm";

export class addMiddleName1643173385140 implements MigrationInterface {
    name = 'addMiddleName1643173385140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "MiddleName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "MiddleName"`);
    }

}
