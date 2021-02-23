import { lazy } from "react";

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
];
