import { config } from "dotenv";

config();

export const envConfig = {
  PORT: process.env.PORT }

export const dbConfig = {
  DB_NAME:process.env.DB_NAME,
  HOST:process.env.DB_HOST,
  USERNAME:process.env.DB_USERNAME,
  DIALECT: process.env.DB_DIALECT,
  PASSWORD: process.env.DB_PASSWORD,
  PORT: process.env.DB_PORT
}