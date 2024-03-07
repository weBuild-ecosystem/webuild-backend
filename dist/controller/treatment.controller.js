"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const treatment_service_1 = require("../services/treatment.service");
var router = express_1.default.Router();
router.post("/create", treatment_service_1.createTreatment);
router.post("/get", (0, express_validator_1.body)('id').isLength({ min: 1 }), treatment_service_1.getTreatments);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlYXRtZW50LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci90cmVhdG1lbnQuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qix5REFBeUM7QUFDekMscUVBQStFO0FBRy9FLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ3JCLG1DQUFlLENBQUMsQ0FBQztBQUVqQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBSSxJQUFBLHdCQUFJLEVBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3JELGlDQUFhLENBQUMsQ0FBQztBQUdmLGtCQUFlLE1BQU0sQ0FBQyJ9