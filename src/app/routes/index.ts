// routes

import { Router } from "express";

const router = Router();

// module routes

const moduleRoutes = [];

// Register module routes

moduleRoutes.forEach((route) => {
  router.use(route.path, route.router);
});

// Export the router
export default router;
