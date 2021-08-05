import * as typeorm from "typeorm";


export abstract class CustomBaseEntity {

    @typeorm.BeforeInsert()
    updateDates() {
        this.createDate = new Date();
    }
    @typeorm.PrimaryGeneratedColumn()
    id: number;
    @typeorm.CreateDateColumn()
    createDate: Date;
    @typeorm.UpdateDateColumn()
    updateDate: Date;
}