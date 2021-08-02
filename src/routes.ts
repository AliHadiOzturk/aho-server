import { Router } from "express";
import authRouter from "./controllers/auth/auth";

const routes = Router();
// const router = Router();

// export const Routes = async (req, res, next) => {

// }
routes.use("/auth", authRouter)

export default routes;

// router.use("/auth", authRoutes)

// export default router;