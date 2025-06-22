// server.ts
import express from "express";
import { Server } from "http";
import app from "./app";

import config from "./app/config";
import { PrismaClient } from "@prisma/client";

// server
let server: Server;
// Initialize Prisma Client
const prisma = new PrismaClient();

// bootstrap
async function bootstrap() {
  try {
    await prisma.$connect();
    // start server
    server = app.listen(config.PORT, () => {
      console.log("Server is running on port", config.PORT);
    });
  } catch (error) {
    console.error("Error during bootstrap:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();

// handling unhandled rejection (async)
process.on("unhandledRejection", () => {
  console.log("Unhandled rejection. Shutting down...");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
// handling uncaught exception (sync)
process.on("uncaughtException", () => {
  console.log("Uncaught exception. Shutting down...");
  process.exit(1);
});
