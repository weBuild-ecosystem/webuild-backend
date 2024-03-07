"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const server_1 = __importDefault(require("./utils/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_midd_1 = require("./middleware/auth.midd");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const history_controller_1 = __importDefault(require("./controller/history.controller"));
const calendar_controller_1 = __importDefault(require("./controller/calendar.controller"));
const treatment_controller_1 = __importDefault(require("./controller/treatment.controller"));
const billing_controller_1 = __importDefault(require("./controller/billing.controller"));
const spesse_controller_1 = __importDefault(require("./controller/spesse.controller"));
const port = 3001;
exports.app = (0, server_1.default)();
mongoose_1.default.connect('mongodb://canitrotbartolome:juInQ2XWJkOIWiqa@ac-29lwldj-shard-00-00.x5zoaac.mongodb.net:27017,ac-29lwldj-shard-00-01.x5zoaac.mongodb.net:27017,ac-29lwldj-shard-00-02.x5zoaac.mongodb.net:27017/?ssl=true&replicaSet=atlas-tbn2ge-shard-0&authSource=admin&retryWrites=true&w=majority', err => {
    if (err)
        throw err;
    console.log('connected to MongoDB');
});
exports.app.use("/billing", auth_midd_1.globalAuthorization, billing_controller_1.default);
exports.app.use("/treatment", auth_midd_1.globalAuthorization, treatment_controller_1.default);
exports.app.use("/calendar", auth_midd_1.globalAuthorization, calendar_controller_1.default);
exports.app.use("/user", auth_midd_1.globalAuthorization, user_controller_1.default);
exports.app.use("/history", auth_midd_1.globalAuthorization, history_controller_1.default);
exports.app.use("/spesse", auth_midd_1.globalAuthorization, spesse_controller_1.default);
exports.app.listen(port, async () => {
    console.log(`App is running at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0REFBMEM7QUFDMUMsd0RBQStCO0FBQy9CLHNEQUE2RDtBQUM3RCxtRkFBc0Q7QUFDdEQseUZBQTREO0FBQzVELDJGQUE4RDtBQUM5RCw2RkFBZ0U7QUFDaEUseUZBQTJEO0FBQzNELHVGQUEwRDtBQUUxRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDTCxRQUFBLEdBQUcsR0FBRyxJQUFBLGdCQUFZLEdBQUUsQ0FBQztBQUNsQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyx3UkFBd1IsRUFDdlMsR0FBRyxDQUFDLEVBQUU7SUFDRixJQUFHLEdBQUc7UUFBRSxNQUFNLEdBQUcsQ0FBQztJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDSCxXQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSwrQkFBbUIsRUFBRSw0QkFBWSxDQUFDLENBQUM7QUFDdkQsV0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsK0JBQW1CLEVBQUUsOEJBQWUsQ0FBQyxDQUFDO0FBQzVELFdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLCtCQUFtQixFQUFFLDZCQUFjLENBQUMsQ0FBQztBQUMxRCxXQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSwrQkFBbUIsRUFBRSx5QkFBVSxDQUFDLENBQUM7QUFDbEQsV0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsK0JBQW1CLEVBQUUsNEJBQWEsQ0FBQyxDQUFDO0FBQ3hELFdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLCtCQUFtQixFQUFFLDJCQUFZLENBQUMsQ0FBQztBQUV0RCxXQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxDQUFDIn0=