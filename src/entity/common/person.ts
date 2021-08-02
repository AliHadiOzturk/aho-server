import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../customBaseEntity";

@Entity()
export class Person extends CustomBaseEntity {
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    dateOfBirth: Date;
    @Column()
    phoneNumber: string;
}