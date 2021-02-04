import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { Person } from "../Person";
import { Post } from "./Post";

@Entity()
export class Author extends BaseEntity {
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;


    @OneToMany(() => Post, post => post.author)
    posts: Post[];

}