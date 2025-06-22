import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), ".env") });
// Export configuration variables

export default {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL,
};
