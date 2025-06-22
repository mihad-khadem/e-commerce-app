// app.ts
import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./app/routes"; //

const app: Application = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(helmet());

// Load environment variables
dotenv.config();
// application routes
// app.use("/api/v1", routes);
// global error handler middleware
// app.use();
// 404 not found handler middleware
// app.use();
// health check route
app.get("/", (req, res) => {
  res.send("E-Commerce API is running!").json({
    status: "success",
    message: "E-Commerce API is running!",
    data: null,
  });
});

// export
export default app;
