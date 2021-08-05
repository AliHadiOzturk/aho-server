import { GetUserRepository } from '../../entity/common/security/repositories/userRepository';
import { User } from '../../entity/common/security/user';
import { getOne } from './../base';
export const get = getOne<User>(GetUserRepository())
