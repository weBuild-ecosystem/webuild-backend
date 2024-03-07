"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const dealer_1 = require("../middleware/dealer");
const user_service_1 = require("../services/user.service");
var router = express_1.default.Router();
router.post("/create", user_service_1.createUser);
router.get("/get", dealer_1.authorization, user_service_1.getUser);
router.post("/getclients", dealer_1.authorization, user_service_1.getClients);
router.post("/getmedicals", dealer_1.authorization, user_service_1.getMedicals);
router.post("/updatepassword", dealer_1.authorization, (0, express_validator_1.body)("_id").isLength({ min: 6 }), user_service_1.resetPassword);
router.post("/getuserid", dealer_1.authorization, user_service_1.getUserById);
router.post("/login", (0, express_validator_1.body)('password').isLength({ min: 5 }), (0, express_validator_1.body)('email').isEmail(), user_service_1.loginUser);
router.post("/update", dealer_1.authorization, user_service_1.updateUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBRTlCLHlEQUF5QztBQUN6QyxpREFBcUQ7QUFDckQsMkRBQTJJO0FBRTNJLElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUseUJBQVUsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFhLEVBQzdCLHNCQUFPLENBQUMsQ0FBQztBQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHNCQUFhLEVBQ3hDLHlCQUFVLENBQUMsQ0FBQztBQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLHNCQUFhLEVBQ3pDLDBCQUFXLENBQUMsQ0FBQztBQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsc0JBQWEsRUFDNUMsSUFBQSx3QkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUM5Qiw0QkFBYSxDQUFDLENBQUM7QUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxzQkFBYSxFQUN2QywwQkFBVyxDQUFDLENBQUM7QUFFYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDbEIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUNyQyxJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3pCLHdCQUFTLENBQUMsQ0FBQztBQU1YLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHNCQUFhLEVBQUUseUJBQVUsQ0FBQyxDQUFDO0FBRWxELGtCQUFlLE1BQU0sQ0FBQyJ9