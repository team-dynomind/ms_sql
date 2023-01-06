import {
    cleanEnv, num, str
} from 'envalid';
import { Environment } from '../interfaces/env';

export const validateEnv = () => {
    return cleanEnv<Environment>(process.env, {
        DB_HOST: str(),
        DB_NAME: str(),
        DB_USERNAME: str(),
        DB_PORT: num(),
        DB_PASSWORD: str(),
        PORT: num(),
    });
}