import React from "react";

export const routing = [
  { path: "/", page: React.lazy(() => import("../pages/HomePage")) },
  { path: "/login", page: React.lazy(() => import("../pages/LoginPage")) },
  { path: "/", page: React.lazy(() => import("../pages/NewsPage")) },
  { path: "/*", page: React.lazy(() => import("../pages/UndefinedPage")) },
];
