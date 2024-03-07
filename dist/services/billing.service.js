"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBilling = exports.createBilling = void 0;
const express_validator_1 = require("express-validator");
const billing_1 = __importDefault(require("../schema/billing"));
function createBilling(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const body = req.body;
        const addingBilling = new billing_1.default(body);
        addingBilling.markModified("billing");
        addingBilling.save();
        console.log(addingBilling);
        if (addingBilling) {
            return res
                .status(202)
                .json({ message: "Billing registered", billing: addingBilling });
        }
        else
            return res.status(204).json({ message: "Billing not registered" });
    }
    catch (errors) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.createBilling = createBilling;
async function getBilling(req, res) {
    try {
        const body = req.body;
        var responseFrom = undefined;
        await billing_1.default.find({ from_id: body.id }, function (err, doc) {
            responseFrom = doc;
        }).clone();
        var responseTo = undefined;
        await billing_1.default.find({ to_id: body.id }, function (err, doc) {
            responseTo = doc;
        }).clone();
        var calendars;
        if (responseFrom !== undefined) {
            calendars = [...responseFrom];
        }
        if (responseTo !== undefined) {
            calendars = [...calendars, ...responseTo];
        }
        return res.status(202).json({ message: "Billings found", from: responseFrom, to: responseTo });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getBilling = getBilling;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL2JpbGxpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5REFBcUQ7QUFFckQsZ0VBQThDO0FBRTlDLFNBQWdCLGFBQWEsQ0FBQyxHQUFrQixFQUFFLEdBQWE7SUFDN0QsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUEsb0NBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFFRCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sYUFBYSxHQUFHLElBQUksaUJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxhQUFhLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksYUFBYSxFQUFFO1lBQ2pCLE9BQU8sR0FBRztpQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUNwRTs7WUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLENBQUMsQ0FBQztLQUMzRTtJQUFDLE9BQU8sTUFBTSxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDO0FBcEJELHNDQW9CQztBQUVNLEtBQUssVUFBVSxVQUFVLENBQUMsR0FBa0IsRUFBRSxHQUFhO0lBQ2hFLElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksWUFBWSxHQUFRLFNBQVMsQ0FBQztRQUNsQyxNQUFNLGlCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxHQUFHO1lBQzlELFlBQVksR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxJQUFJLFVBQVUsR0FBUSxTQUFTLENBQUM7UUFDaEMsTUFBTSxpQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRztZQUMxRCxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFHLFlBQVksS0FBSyxTQUFTLEVBQUM7WUFDMUIsU0FBUyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUcsVUFBVSxLQUFLLFNBQVMsRUFBQztZQUN4QixTQUFTLEdBQUcsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQ2hHO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUMsQ0FBQztLQUNuRTtBQUNILENBQUM7QUF0QkQsZ0NBc0JDIn0=