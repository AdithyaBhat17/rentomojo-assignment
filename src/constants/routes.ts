import { lazy } from "react";

const Users = lazy(() => import("../components/Users"));
const Posts = lazy(() => import("../components/Posts"));
const PostDetails = lazy(() => import("../components/PostDetails"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));

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
