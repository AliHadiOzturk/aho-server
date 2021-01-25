import { Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Person } from './Person';

@Entity()
export class User extends BaseEntity {
    username: string;
    password: string;
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;

}
