"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalAuthorization = void 0;
const globalAuthorization = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth === 'authKey') {
        return next();
    }
    else
        return res.status(403).json({ message: "Invalid authorization" });
};
exports.globalAuthorization = globalAuthorization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvYXV0aC5taWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNuRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2QyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7UUFDdEIsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNmOztRQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFBO0FBQzFFLENBQUMsQ0FBQztBQUxXLFFBQUEsbUJBQW1CLHVCQUs5QiJ9