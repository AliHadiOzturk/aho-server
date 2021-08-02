import { Column, Entity, JoinColumn, OneToMany, OneToOne, Unique } from "typeorm";
import { Comment } from '../blog/comment';
import { CustomBaseEntity } from "../customBaseEntity";
import { Person } from './person';


@Entity()
@Unique("User", ["email"])
export class User extends CustomBaseEntity {
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @OneToOne(() => Person)
    @JoinColumn({ name: "person_id" })
    person: Partial<Person>;

    @OneToMany(() => Comment, comment => comment.user)
    comments: Array<Comment>;

}
