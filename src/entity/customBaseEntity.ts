import * as typeorm from "typeorm";


export abstract class CustomBaseEntity<T> {

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

    public create(model: Partial<T>) {
        Object.assign(this, model);
        return this;
    }
}