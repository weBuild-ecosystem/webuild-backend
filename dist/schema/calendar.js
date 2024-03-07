"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const calendarSchema = new mongoose_1.Schema({
    from_id: {
        type: String,
        required: true,
    },
    to_id: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    from_name: {
        type: String,
        required: true
    },
    to_name: {
        type: String,
        required: true
    },
    to_medical: {
        type: String,
        required: true
    },
    to_medicalname: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("calendars", calendarSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hL2NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdDO0FBR3hDLE1BQU0sY0FBYyxHQUFXLElBQUksaUJBQU0sQ0FDdkM7SUFDSSxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxHQUFHLEVBQUU7UUFDSCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FFSixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFBO0FBRUQsa0JBQWUsSUFBQSxnQkFBSyxFQUFnQixXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUMifQ==