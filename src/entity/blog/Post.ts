import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { CustomBaseEntity } from "../customBaseEntity";
import { Author } from "./author";
import { Comment } from "./comment";
@Entity()
export class Post extends CustomBaseEntity {
    @Column()
    title: string;
    @Column()
    description: string;
    @Column()
    content: string;

    @ManyToOne(() => Author, author => author.posts)
    author: Author;

    @OneToMany(() => Comment, comment => comment.posts)
    comments: Array<Comment>;
    // @ManyToMany(() => Category, category => category.posts)
    // categories: Category[];
}