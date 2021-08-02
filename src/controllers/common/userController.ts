import { GetUserRepository } from './../../entity/common/repositories/userRepository';
import { User } from './../../entity/common/user';
import { getOne } from './../base';
export const get = getOne<User>(GetUserRepository())
