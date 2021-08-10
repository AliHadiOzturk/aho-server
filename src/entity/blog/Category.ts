import { Entity, JoinTable, ManyToMany } from "typeorm";
import { CustomBaseEntity } from "../customBaseEntity";
import { Post } from "./post";
@Entity()
export class Category extends CustomBaseEntity<Category> {
    name: string;
    description: string;

    @ManyToMany(() => Post)
    @JoinTable()
    posts: Post[];
}