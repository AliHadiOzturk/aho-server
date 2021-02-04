import { Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { Post } from "./Post";
@Entity()
export class Category extends BaseEntity {
    name: string;
    description: string;

    @ManyToMany(() => Post)
    @JoinTable()
    posts: Post[];
}