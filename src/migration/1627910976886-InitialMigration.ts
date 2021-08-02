import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1627910976886 implements MigrationInterface {
    name = 'InitialMigration1627910976886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "content" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "personId" integer, CONSTRAINT "REL_a083f94557a64200597ec7ff33" UNIQUE ("personId"), CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "username" character varying NOT NULL, "password" character varying NOT NULL, "personId" integer, CONSTRAINT "REL_6aac19005cea8e2119cbe7759e" UNIQUE ("personId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_posts_post" ("categoryId" integer NOT NULL, "postId" integer NOT NULL, CONSTRAINT "PK_c1c7f6f042e69969b16ac4a0670" PRIMARY KEY ("categoryId", "postId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3a1f3735235af2f4b702a3d398" ON "category_posts_post" ("categoryId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0cb77d79c53f0759b8153ec8a6" ON "category_posts_post" ("postId") `);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "FK_a083f94557a64200597ec7ff33b" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_posts_post" ADD CONSTRAINT "FK_3a1f3735235af2f4b702a3d3987" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_posts_post" ADD CONSTRAINT "FK_0cb77d79c53f0759b8153ec8a62" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_posts_post" DROP CONSTRAINT "FK_0cb77d79c53f0759b8153ec8a62"`);
        await queryRunner.query(`ALTER TABLE "category_posts_post" DROP CONSTRAINT "FK_3a1f3735235af2f4b702a3d3987"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6aac19005cea8e2119cbe7759e8"`);
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "FK_a083f94557a64200597ec7ff33b"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
        await queryRunner.query(`DROP INDEX "IDX_0cb77d79c53f0759b8153ec8a6"`);
        await queryRunner.query(`DROP INDEX "IDX_3a1f3735235af2f4b702a3d398"`);
        await queryRunner.query(`DROP TABLE "category_posts_post"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "author"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
