import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CustomBaseEntity } from "../customBaseEntity";
import { User } from "../security/user";
import { Post } from "./post";


@Entity()
export class Comment extends CustomBaseEntity<Comment> {
    @ManyToOne(() => User, user => user.comments)
    @JoinColumn({ name: 'user_id' })
    user: User
    @ManyToOne(() => Post, post => post.comments)
    @JoinColumn({ name: 'post_id' })
    posts: Post



    @Column({ length: 5000 })
    comment: string;

    commentDate: Date;
}