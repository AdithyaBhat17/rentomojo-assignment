import { lazy } from "react";
import PageNotFound from "../components/PageNotFound";
import PostDetails from "../components/PostDetails";
import Posts from "../components/Posts";

const Users = lazy(() => import("../components/Users"));

export const routes = [
  {
    path: "/",
    component: Users,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/users/:userId/posts",
    component: Posts,
  },
  {
    path: "/users/:userId/posts/:postId",
    component: PostDetails,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
