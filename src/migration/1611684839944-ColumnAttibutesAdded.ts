import {MigrationInterface, QueryRunner} from "typeorm";

export class ColumnAttibutesAdded1611684839944 implements MigrationInterface {
    name = 'ColumnAttibutesAdded1611684839944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "person" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "person" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD "surname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ADD "dateOfBirth" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "category" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "category" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updateDate" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createDate"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "dateOfBirth"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "surname"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "updateDate"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "createDate"`);
    }

}
