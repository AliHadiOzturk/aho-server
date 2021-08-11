import { EntityRepository } from 'typeorm';
import { Post } from '../../entity/blog/post';
import { CustomAbstractRepository } from "../../entity/customAbstractRepository";
@EntityRepository(Post)
export class PostRepository extends CustomAbstractRepository<Post> {
    constructor() {
        super();

    }
}