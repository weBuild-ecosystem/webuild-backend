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
        const { _id } = jsonwebtoken_1.default.verify(token, "SECRET_EXAMPLE_KEY");
        req._id = _id;
        return next();
    }
    catch {
        return res.status(403).json({ message: "Invalid token" });
    }
};
exports.authorization = authorization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvZGVhbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUErQztBQUd4QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQWtCLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNyRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUN2QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFBO0tBQ3hEO0lBQ0QsSUFBSTtRQUNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLENBQWUsQ0FBQztRQUN0RSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNkLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUFDLE1BQU07UUFDTixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBQyxDQUFDLENBQUE7S0FDeEQ7QUFDSCxDQUFDLENBQUM7QUFaVyxRQUFBLGFBQWEsaUJBWXhCIn0=