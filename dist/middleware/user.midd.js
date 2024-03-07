"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(403).json({ message: "Invalid token" });
    }
    try {
        const data = jsonwebtoken_1.default.verify(token, "SECRET_EXAMPLE_KEY");
        return next();
    }
    catch {
        return res.status(403).json({ message: "Invalid token" });
    }
};
exports.authorization = authorization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5taWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvdXNlci5taWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUErQjtBQUl4QixNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQy9FLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQ3ZDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUE7S0FDeEQ7SUFDRCxJQUFJO1FBQ0YsTUFBTSxJQUFJLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNmO0lBQUMsTUFBTTtRQUNOLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQTtLQUN4RDtBQUNILENBQUMsQ0FBQztBQVpXLFFBQUEsYUFBYSxpQkFZeEIifQ==