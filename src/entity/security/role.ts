import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { CustomBaseEntity } from "../customBaseEntity";
import { Permission } from "./permission";
import { User } from "./user";

@Entity()
export class Role extends CustomBaseEntity<Role> {
    @Column()
    name: string;
    @Column()
    description: string;

    @ManyToMany(() => User)
    users: User[];

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}