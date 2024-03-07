"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpesse = exports.createSpesse = void 0;
const express_validator_1 = require("express-validator");
const spesse_1 = __importDefault(require("../schema/spesse"));
function createSpesse(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const body = req.body;
        const addingSpesse = new spesse_1.default(body);
        addingSpesse.markModified("spesse");
        addingSpesse.save();
        if (addingSpesse) {
            return res
                .status(202)
                .json({ message: "Spesse registered", spesse: addingSpesse });
        }
        else
            return res.status(204).json({ message: "Spesse not registered" });
    }
    catch (errors) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.createSpesse = createSpesse;
async function getSpesse(req, res) {
    try {
        const body = req.body;
        var responseFrom = undefined;
        await spesse_1.default.find({ from_id: body.id }, function (err, doc) {
            responseFrom = doc;
        }).clone();
        var responseTo = undefined;
        await spesse_1.default.find({ to_id: body.id }, function (err, doc) {
            responseTo = doc;
        }).clone();
        var calendars;
        if (responseFrom !== undefined) {
            calendars = [...responseFrom];
        }
        if (responseTo !== undefined) {
            calendars = [...calendars, ...responseTo];
        }
        return res.status(202).json({ message: "Spesse found", spesse: calendars.filter((item, index, array) => index === array.findIndex(foundItem => (item._id === foundItem._id || item.to_id === foundItem.to_id))) });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getSpesse = getSpesse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Blc3NlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvc3Blc3NlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXFEO0FBRXJELDhEQUE0QztBQUU1QyxTQUFnQixZQUFZLENBQUMsR0FBa0IsRUFBRSxHQUFhO0lBQzVELElBQUk7UUFDRixNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixNQUFNLFlBQVksR0FBRyxJQUFJLGdCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxHQUFHO2lCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFOztZQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO0tBQzFFO0lBQUMsT0FBTyxNQUFNLEVBQUU7UUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztLQUNuRTtBQUNILENBQUM7QUFuQkQsb0NBbUJDO0FBRU0sS0FBSyxVQUFVLFNBQVMsQ0FBQyxHQUFrQixFQUFFLEdBQWE7SUFDL0QsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxZQUFZLEdBQVEsU0FBUyxDQUFDO1FBQ2xDLE1BQU0sZ0JBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEdBQUc7WUFDN0QsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLElBQUksVUFBVSxHQUFRLFNBQVMsQ0FBQztRQUNoQyxNQUFNLGdCQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQ3pELFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLFNBQVMsQ0FBQztRQUNkLElBQUcsWUFBWSxLQUFLLFNBQVMsRUFBQztZQUMxQixTQUFTLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBRyxVQUFVLEtBQUssU0FBUyxFQUFDO1lBQ3hCLFNBQVMsR0FBRyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FDdkcsS0FBSyxLQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0tBQzNHO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztLQUNuRTtBQUNILENBQUM7QUF4QkQsOEJBd0JDIn0=