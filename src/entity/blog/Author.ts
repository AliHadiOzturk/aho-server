import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Person } from "../common/person";
import { CustomBaseEntity } from "../customBaseEntity";
import { Post } from "./post";

@Entity()
export class Author extends CustomBaseEntity<Author> {
    @OneToOne(() => Person)
    @JoinColumn()
    person: Person;


    @OneToMany(() => Post, post => post.author)
    posts: Post[];

}