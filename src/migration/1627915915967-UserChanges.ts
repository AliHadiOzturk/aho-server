import {MigrationInterface, QueryRunner} from "typeorm";

export class UserChanges1627915915967 implements MigrationInterface {
    name = 'UserChanges1627915915967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8"`);
        await queryRunner.query(`ALTER TABLE "public"."person" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."person" DROP COLUMN "surname"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "REL_6aac19005cea8e2119cbe7759e"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "personId"`);
        await queryRunner.query(`ALTER TABLE "public"."person" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."person" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."person" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "person_id" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_a4cee7e601d219733b064431fba" UNIQUE ("person_id")`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_a4cee7e601d219733b064431fba" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_a4cee7e601d219733b064431fba"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_a4cee7e601d219733b064431fba"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "person_id"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "public"."person" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "public"."person" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "public"."person" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "personId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "REL_6aac19005cea8e2119cbe7759e" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "public"."person" ADD "surname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."person" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
