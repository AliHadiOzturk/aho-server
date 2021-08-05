import { Entity, JoinTable, ManyToMany } from "typeorm";
import { CustomBaseEntity } from "../../customBaseEntity";
import { Permission } from "./permission";
import { User } from "./user";

@Entity()
export class Role extends CustomBaseEntity {
    name: string;
    description: string;

    @ManyToMany(() => User)
    users: User[];

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}