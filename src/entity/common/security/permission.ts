import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../../customBaseEntity";

@Entity()
export class Permission extends CustomBaseEntity<Permission> {
    @Column()
    name: string;
    @Column()
    path: string;
    @Column()
    description: string;
}