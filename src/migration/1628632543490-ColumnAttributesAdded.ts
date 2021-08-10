import { MigrationInterface, QueryRunner } from "typeorm";

export class ColumnAttributesAdded1628632543490 implements MigrationInterface {
    name = 'ColumnAttributesAdded1628632543490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."permission" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."permission" ADD "path" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."permission" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."role" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."role" ADD "description" character varying NOT NULL`);
        // await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "User"`);
        // await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        // await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "User" UNIQUE ("email", "username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "User"`);
        // await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        // await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "User" UNIQUE ("username", "email")`);
        await queryRunner.query(`ALTER TABLE "public"."role" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "public"."role" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."permission" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "public"."permission" DROP COLUMN "path"`);
        await queryRunner.query(`ALTER TABLE "public"."permission" DROP COLUMN "name"`);
    }

}
