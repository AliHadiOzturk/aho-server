import { Router } from "express";
import { Post } from "../../entity/blog/post";
import { PostRepository } from "../../repositories/blog/postRepository";
import { addBaseRoutes } from "../../utils/routerUtils";

let postController = Router();
postController = addBaseRoutes(postController, Post, PostRepository);
export default postController;