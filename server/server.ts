import dotenv from "dotenv";
import App from "./app";
import { validateEnv } from "./utils/validateEnv";

dotenv.config();
const env = validateEnv();

const app = new App(env);
app.listen();
