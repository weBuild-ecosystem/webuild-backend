"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalendars = exports.createCalendar = void 0;
const express_validator_1 = require("express-validator");
const calendar_1 = __importDefault(require("../schema/calendar"));
function createCalendar(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const body = req.body;
        const addingCalendar = new calendar_1.default(body);
        addingCalendar.markModified("calendar");
        addingCalendar.save();
        console.log(addingCalendar);
        if (addingCalendar) {
            return res
                .status(202)
                .json({ message: "Calendar registered", calendar: addingCalendar });
        }
        else
            return res.status(204).json({ message: "Calendar not registered" });
    }
    catch (errors) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.createCalendar = createCalendar;
async function getCalendars(req, res) {
    try {
        const body = req.body;
        var responseFrom = undefined;
        responseFrom = await calendar_1.default.find({ from_id: body.id }, function (err, doc) {
            return doc;
        }).clone();
        var responseTo = [];
        responseTo = await calendar_1.default.find({ to_id: body.id }, function (err, doc) {
            return [...doc];
        }).clone();
        var medical = await calendar_1.default.find({ to_medical: body.id }, function (err, doc) {
            return doc;
        }).clone();
        return res.status(202).json({ message: "Clients found", from: responseFrom, to: responseTo, medical: medical ?? [] });
    }
    catch (error) {
        console.log(error);
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getCalendars = getCalendars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUFxRDtBQUVyRCxrRUFBZ0Q7QUFFaEQsU0FBZ0IsY0FBYyxDQUFDLEdBQWtCLEVBQUUsR0FBYTtJQUM5RCxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsSUFBQSxvQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN6RDtRQUVELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsTUFBTSxjQUFjLEdBQUcsSUFBSSxrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxjQUFjLEVBQUU7WUFDbEIsT0FBTyxHQUFHO2lCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZFOztZQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO0tBQzVFO0lBQUMsT0FBTyxNQUFNLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztLQUNuRTtBQUNILENBQUM7QUFwQkQsd0NBb0JDO0FBRU0sS0FBSyxVQUFVLFlBQVksQ0FBQyxHQUFrQixFQUFFLEdBQWE7SUFDbEUsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxZQUFZLEdBQVEsU0FBUyxDQUFDO1FBQ2xDLFlBQVksR0FBRyxNQUFNLGtCQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQzlFLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFWCxJQUFJLFVBQVUsR0FBUSxFQUFFLENBQUM7UUFDekIsVUFBVSxHQUFHLE1BQU0sa0JBQWMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFDeEUsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxNQUFNLGtCQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQzlFLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0tBQ3RIO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO0tBQ25FO0FBQ0gsQ0FBQztBQXRCRCxvQ0FzQkMifQ==