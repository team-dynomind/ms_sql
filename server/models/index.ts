import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { validateEnv } from "../utils/validateEnv";

dotenv.config();
const env = validateEnv();

const sequelize = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
  dialect: "mysql",
  host: env.DB_HOST,
  port: env.DB_PORT,
  logging: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize
};

export default db;