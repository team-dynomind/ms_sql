"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dotenv_1 = __importDefault(require("dotenv"));
var validateEnv_1 = require("../utils/validateEnv");
dotenv_1.default.config();
var env = (0, validateEnv_1.validateEnv)();
var sequelize = new sequelize_1.Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    dialect: "mysql",
    host: env.DB_HOST,
    port: env.DB_PORT,
    logging: false
});
var db = {
    Sequelize: sequelize_1.Sequelize,
    sequelize: sequelize
};
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQXNDO0FBQ3RDLGtEQUE0QjtBQUM1QixvREFBbUQ7QUFFbkQsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixJQUFNLEdBQUcsR0FBRyxJQUFBLHlCQUFXLEdBQUUsQ0FBQztBQUUxQixJQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDN0UsT0FBTyxFQUFFLE9BQU87SUFDaEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxPQUFPO0lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTztJQUNqQixPQUFPLEVBQUUsS0FBSztDQUNmLENBQUMsQ0FBQztBQUVILElBQU0sRUFBRSxHQUFvRDtJQUMxRCxTQUFTLEVBQUUscUJBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7Q0FDckIsQ0FBQztBQUVGLGtCQUFlLEVBQUUsQ0FBQyJ9