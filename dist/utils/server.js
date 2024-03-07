"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: 'http://173.249.39.113:3000',
    credentials: true,
    optionSuccessStatus: 200,
};
function createServer() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)(corsOptions));
    return app;
}
exports.default = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhEQUFxQztBQUNyQyxzREFBOEI7QUFDOUIsa0VBQXlDO0FBQ3pDLGdEQUF3QjtBQUV4QixNQUFNLFdBQVcsR0FBRTtJQUVqQixNQUFNLEVBQUMsNEJBQTRCO0lBQ25DLFdBQVcsRUFBQyxJQUFJO0lBQ2hCLG1CQUFtQixFQUFDLEdBQUc7Q0FFeEIsQ0FBQTtBQUNELFNBQVMsWUFBWTtJQUNuQixNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztJQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsdUJBQVksR0FBRSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzFCLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELGtCQUFlLFlBQVksQ0FBQyJ9