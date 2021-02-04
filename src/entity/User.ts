import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Person } from './Person';

@Entity()
export class User extends BaseEntity {
    @Column()
    username: string;
    @Column()
    password: string;
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;

}
