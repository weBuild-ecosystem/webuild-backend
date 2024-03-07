"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.loginUser = exports.getUser = exports.getUserById = exports.resetPassword = exports.getMedicals = exports.getClients = exports.createUser = void 0;
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../schema/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const calendar_1 = __importDefault(require("../schema/calendar"));
const statictoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHV0ZW50ZSI6IjQ1IiwiaWRhcHBsaWNhemlvbmUiOiIyIiwiaWRjb250ZXN0byI6IjAiLCJub21lIjoiRU1PQklMRTI0IiwiY29nbm9tZSI6IkVNT0JJTEUyNCIsIm5iZiI6MTY3OTA1OTQ1NiwiZXhwIjoxNzEwNTk1NDU2LCJpYXQiOjE2NzkwNTk0NTZ9.wsdwUoTivWI3tyK5diDI63_IFXOQ5wEnlww_9DTDYLM';
function createUser(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randPassword = [...Array(8)].map(_ => c[~~(Math.random() * c.length)]).join('');
        let encryptedrandPassword = bcrypt_1.default.hashSync(randPassword.toString(), 10);
        const body = req.body;
        const addingDealer = new user_1.default({
            password: encryptedrandPassword,
            ...body
        });
        addingDealer.markModified("users");
        addingDealer.save();
        if (addingDealer) {
            return res
                .status(202)
                .json({ message: "User registered", user: addingDealer, password: randPassword });
        }
        else
            return res.status(204).json({ message: "User not registered" });
    }
    catch (errors) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.createUser = createUser;
async function getClients(req, res) {
    try {
        const body = req.body;
        var userResponse;
        userResponse = await user_1.default.find({ type: 0, from_id: body.id }, function (err, doc) {
            return doc;
        }).clone();
        var calendar = [];
        console.log('1');
        if (userResponse?.length > 0) {
            console.log('2');
            for (var i = 0; i < userResponse?.length; i++) {
                const fromresponse = await calendar_1.default.findOne({ from_id: userResponse[i]?._id }, async function (err, from) {
                    return from;
                }).limit(1).clone();
                const toresponse = await calendar_1.default.findOne({ to_id: userResponse[i]?._id }, async function (err, to) {
                    return to;
                }).limit(1).clone();
                if (fromresponse !== null) {
                    console.log('3');
                    calendar[i] = fromresponse;
                }
                else
                    calendar[i] = toresponse;
            }
        }
        return res.status(202).json({ message: "Clients found", clients: userResponse?.map((e, index) => {
                return { ...e?._doc, ...calendar[index]?._doc };
            }) });
    }
    catch (error) {
        console.log(error);
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getClients = getClients;
function getMedicals(req, res) {
    try {
        const body = req.body;
        user_1.default.find({ type: 2, from_id: body.id }, function (err, doc) {
            if (err)
                return res.status(404).json({ message: "Medicals don't found" });
            return res.status(202).json({ message: "Medicals found", medical: doc });
        });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getMedicals = getMedicals;
function resetPassword(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { _id } = req.body;
        const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randPassword = [...Array(8)].map(_ => c[~~(Math.random() * c.length)]).join('');
        let encryptedrandPassword = bcrypt_1.default.hashSync(randPassword.toString(), 10);
        user_1.default.findOneAndUpdate({ _id }, { password: encryptedrandPassword }, function (err, doc) {
            if (err)
                return res.status(404).json({ message: "invalid body or error" });
            return res.status(202).json({ message: "Password Updated", password: randPassword });
        });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.resetPassword = resetPassword;
async function getUserById(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var responseUser = await user_1.default.findOne({ _id: req.body.id }, function (err, doc) {
            return doc;
        }).clone();
        return res.status(202).json({ message: "User found", user: responseUser });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getUserById = getUserById;
async function getUser(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        var responseUser = await user_1.default.findOne({ _id: req._id }, function (err, doc) {
            return doc;
        }).clone();
        var calendars;
        calendar_1.default.findOne({ from_id: req._id }, function (err, doc) {
            calendars = doc;
        }).limit(1).clone();
        calendar_1.default.findOne({ to_id: req._id }, function (err, doc) {
            calendars += doc;
        }).limit(1).clone();
        var calendar;
        if (calendars !== undefined) {
            if (calendars.length > 0) {
                if (calendars.length === 1) {
                    calendar = calendars[0];
                }
                else {
                    if (calendars[0].createdAt.getTime > calendars[1].createdAt.getTime) {
                        calendar = calendars[1];
                    }
                    else
                        calendar = calendars[0];
                }
            }
        }
        return res.status(202).json({ message: "User found", user: responseUser, calendar });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.getUser = getUser;
async function loginUser(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const body = req.body;
        const account = await user_1.default.findOne({ email: body.email });
        if (account) {
            if (bcrypt_1.default.compareSync(body.password.toString(), account.password.toString())) {
                const token = jsonwebtoken_1.default.sign({ _id: account._id.toString() }, "SECRET_EXAMPLE_KEY", {
                    expiresIn: '2 days',
                });
                return res.status(202).json({ message: "Account loggin", user: account, token, external_token: statictoken });
            }
            else
                return res.status(404).json({ message: "Invalid password" });
        }
        else
            return res.status(404).json({ message: "Account not found", account });
    }
    catch (error) {
        return res.status(505).json({ message: "Invalid body or error" });
    }
}
exports.loginUser = loginUser;
function updateUser(req, res) {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        user_1.default.findOneAndUpdate({ _id: req.body?.id }, { ...req.body }, function (err, doc) {
            if (err)
                return res.status(404).json({ message: "invalid Account" });
            return res.status(202).json({ message: "Updated", user: doc });
        });
    }
    catch (error) {
        return res.status(505).json({ message: "invalid body" });
    }
}
exports.updateUser = updateUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5REFBcUQ7QUFDckQsMERBQTBDO0FBQzFDLG9EQUE0QjtBQUM1QixnRUFBK0M7QUFFL0Msa0VBQWdEO0FBS2hELE1BQU0sV0FBVyxHQUFHLHVSQUF1UixDQUFDO0FBRzVTLFNBQWdCLFVBQVUsQ0FBQyxHQUFrQixFQUFFLEdBQWE7SUFDMUQsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUEsb0NBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNyQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxNQUFNLENBQUMsR0FBRyxnRUFBZ0UsQ0FBQztRQUMzRSxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRixJQUFJLHFCQUFxQixHQUFHLGdCQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sWUFBWSxHQUFHLElBQUksY0FBWSxDQUFDO1lBQ3BDLFFBQVEsRUFBRyxxQkFBcUI7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