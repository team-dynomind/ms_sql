"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
var envalid_1 = require("envalid");
var validateEnv = function () {
    return (0, envalid_1.cleanEnv)(process.env, {
        DB_HOST: (0, envalid_1.str)(),
        DB_NAME: (0, envalid_1.str)(),
        DB_USERNAME: (0, envalid_1.str)(),
        DB_PORT: (0, envalid_1.num)(),
        DB_PASSWORD: (0, envalid_1.str)(),
        PORT: (0, envalid_1.num)(),
    });
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVFbnYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2ZXIvdXRpbHMvdmFsaWRhdGVFbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBRWlCO0FBR1YsSUFBTSxXQUFXLEdBQUc7SUFDdkIsT0FBTyxJQUFBLGtCQUFRLEVBQWMsT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUN0QyxPQUFPLEVBQUUsSUFBQSxhQUFHLEdBQUU7UUFDZCxPQUFPLEVBQUUsSUFBQSxhQUFHLEdBQUU7UUFDZCxXQUFXLEVBQUUsSUFBQSxhQUFHLEdBQUU7UUFDbEIsT0FBTyxFQUFFLElBQUEsYUFBRyxHQUFFO1FBQ2QsV0FBVyxFQUFFLElBQUEsYUFBRyxHQUFFO1FBQ2xCLElBQUksRUFBRSxJQUFBLGFBQUcsR0FBRTtLQUNkLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQTtBQVRZLFFBQUEsV0FBVyxlQVN2QiJ9