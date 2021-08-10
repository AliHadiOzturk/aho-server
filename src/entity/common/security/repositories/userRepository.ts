import { EntityRepository, getCustomRepository } from "typeorm";
import { CustomAbstractRepository } from "../../../customAbstractRepository";
import { User } from "../user";

@EntityRepository(User)
export class UserRepository extends CustomAbstractRepository<User> {
    constructor() {
        super();
        
    }
    findByUsernameOrEmail(username: string, email: string) {
        return this.repository.findOne({ where: [{ email: email }, { username: username }] })
    }

    // getManager = () => this.manager;


}

export const GetUserRepository = () => getCustomRepository(UserRepository)