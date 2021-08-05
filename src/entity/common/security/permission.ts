import { Entity } from "typeorm";
import { CustomBaseEntity } from "../../customBaseEntity";

@Entity()
export class Permission extends CustomBaseEntity {
    name: string;
    path: string;
    description: string;
}