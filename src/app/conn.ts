import { createConnection } from "typeorm";

export const CreateConn = async () => {
    await createConnection();
}