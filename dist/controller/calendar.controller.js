"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const calendar_service_1 = require("../services/calendar.service");
var router = express_1.default.Router();
router.post("/create", calendar_service_1.createCalendar);
router.post("/get", (0, express_validator_1.body)('id').isLength({ min: 1 }), calendar_service_1.getCalendars);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2NhbGVuZGFyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBOEI7QUFDOUIseURBQXlDO0FBQ3pDLG1FQUE0RTtBQUc1RSxJQUFJLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUNyQixpQ0FBYyxDQUFFLENBQUM7QUFFakIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2xCLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDL0IsK0JBQVksQ0FBQyxDQUFDO0FBQ2Qsa0JBQWUsTUFBTSxDQUFDIn0=