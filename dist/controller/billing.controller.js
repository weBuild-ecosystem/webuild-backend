"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const billing_service_1 = require("../services/billing.service");
var router = express_1.default.Router();
router.post("/create", billing_service_1.createBilling);
router.post("/get", (0, express_validator_1.body)('id').isLength({ min: 1 }), billing_service_1.getBilling);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvYmlsbGluZy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHlEQUF5QztBQUN6QyxpRUFBd0U7QUFHeEUsSUFBSSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFDckIsK0JBQWEsQ0FBRSxDQUFDO0FBRWhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNsQixJQUFBLHdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQy9CLDRCQUFVLENBQUMsQ0FBQztBQUNaLGtCQUFlLE1BQU0sQ0FBQyJ9