"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const spesse_service_1 = require("../services/spesse.service");
var router = express_1.default.Router();
router.post("/create", spesse_service_1.createSpesse);
router.post("/get", (0, express_validator_1.body)('id').isLength({ min: 1 }), spesse_service_1.getSpesse);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Blc3NlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9zcGVzc2UuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix5REFBeUM7QUFDekMsK0RBQXFFO0FBR3JFLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ3JCLDZCQUFZLENBQUMsQ0FBQztBQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFJLElBQUEsd0JBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDckQsMEJBQVMsQ0FBQyxDQUFDO0FBR1gsa0JBQWUsTUFBTSxDQUFDIn0=