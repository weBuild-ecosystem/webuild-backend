"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const history_service_1 = require("../services/history.service");
var router = express_1.default.Router();
router.post("/create", history_service_1.createHistory);
router.post("/get", (0, express_validator_1.body)('id').isLength({ min: 1 }), history_service_1.getHistories);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvaGlzdG9yeS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHlEQUF5QztBQUN6QyxpRUFBMEU7QUFHMUUsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDckIsK0JBQWEsQ0FBRSxDQUFDO0FBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFJLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDckQsOEJBQVksQ0FBQyxDQUFDO0FBQ2Qsa0JBQWUsTUFBTSxDQUFDIn0=