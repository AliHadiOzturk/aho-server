import { readFileSync } from "fs";
import { getManager } from "typeorm";
import { Permission } from "../entity/common/security/permission";
import { Role } from "../entity/common/security/role";
import { User } from "../entity/common/security/user";
import path = require("path");

export default class AppInitializer {

    init = async (req, res, next) => {
        var entityManager = getManager();
        let isRoleEmpty = await entityManager.count(Role) == 0;
        let isPermissionEmpty = await entityManager.count(Permission) == 0;
        let isUserEmpty = await entityManager.count(User) == 0;

        let savedRoles;
        let savedPermissions;
        let savedUsers;

        if (isPermissionEmpty) {
            var permissionsJson = await readFileSync(path.join(process.cwd(), "/assets/data/permissions.json"), 'utf-8')
            var permissions = JSON.parse(permissionsJson) as Permission[];
            savedPermissions = await entityManager.save(Permission, permissions)
        }

        if (isRoleEmpty) {
            var roleJsons = await readFileSync(path.join(process.cwd(), "/assets/data/roles.json"), 'utf-8')
            var roles = JSON.parse(roleJsons) as Role[];
            roles.forEach(role => { role.permissions = savedPermissions });
            savedRoles = await entityManager.save(Role, roles)
        }
        if (isUserEmpty) {
            var usersJson = await readFileSync(path.join(process.cwd(), "/assets/data/users.json"), 'utf-8')
            var users = JSON.parse(usersJson) as User[];
            users.forEach(user => { user.roles = savedRoles });
            savedUsers = await entityManager.save(User, users)
        }
        console.log("Initialization completed");
        return res.sendStatus(200);
    }
}