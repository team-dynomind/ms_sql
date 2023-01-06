"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = __importDefault(require("./app"));
var validateEnv_1 = require("./utils/validateEnv");
dotenv_1.default.config();
var env = (0, validateEnv_1.validateEnv)();
var app = new app_1.default(env);
app.listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE0QjtBQUM1Qiw4Q0FBd0I7QUFDeEIsbURBQWtEO0FBRWxELGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsSUFBTSxHQUFHLEdBQUcsSUFBQSx5QkFBVyxHQUFFLENBQUM7QUFFMUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDIn0=