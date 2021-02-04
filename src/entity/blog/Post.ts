import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "../BaseEntity";
import { Author } from "./Author";
@Entity()
export class Post extends BaseEntity {
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    content: string;

    @ManyToOne(() => Author, author => author.posts)
    author: Author;

    // @ManyToMany(() => Category, category => category.posts)
    // categories: Category[];
}