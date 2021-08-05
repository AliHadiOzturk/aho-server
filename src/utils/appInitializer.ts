import { readFileSync } from "fs";
import { getManager } from "typeorm";
import { Permission } from "../entity/common/security/permission";
import { Role } from "../entity/common/security/role";
import { User } from "../entity/common/security/user";
import path = require("path");

export default class AppInitializer {

    init = async (req, res, next) => {
        var entityManager = getManager();
        // var roleRepository = getRepository(Role);
        if (await entityManager.count(Role) > 0) {
            var roleJsons = await readFileSync(path.join(__dirname, "/assets/data/roles.json"), 'utf-8')
            var roles = JSON.parse(roleJsons);
            await entityManager.save(Role, roles)
        }

        if (await entityManager.count(Permission) > 0) {
            var permissionsJson = await readFileSync(path.join(__dirname, "/assets/data/permissions.json"), 'utf-8')
            var permissions = JSON.parse(permissionsJson);
            await entityManager.save(Permission, permissions)
        }

        if (await entityManager.count(User) > 0) {
            var usersJson = await readFileSync(path.join(__dirname, "/assets/data/users.json"), 'utf-8')
            var users = JSON.parse(usersJson);
            await entityManager.save(User, users)
        }
        return res.sendStatus(200);
    }
}