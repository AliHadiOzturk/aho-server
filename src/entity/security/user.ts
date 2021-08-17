import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, Unique } from "typeorm";
import { Person } from "../common/person";
import { CustomBaseEntity } from "../customBaseEntity";
import { Comment } from './../blog/comment';
import { Role } from "./role";


@Entity()
@Unique("User", ["email", "username"])
export class User extends CustomBaseEntity<User> {

    // constructor(init?: Partial<User>) {
    //     super();
    //     Object.assign(this, init);

    // }
    @Column()
    username: string;
    @Column()
    password: string;
    @Column()
    email: string;
    @OneToOne(() => Person)
    @JoinColumn({ name: "person_id" })
    person: Partial<Person>;

    isAdmin: boolean;
    isActive: boolean;

    @OneToMany(() => Comment, comment => comment.user)
    comments: Array<Comment>;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];

    // public create(model: Partial<User>) {
    //     Object.assign(this, model);
    //     return this;
    // }

}
