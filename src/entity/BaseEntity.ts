import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    createDate: Date;
    updateDate: Date;
}