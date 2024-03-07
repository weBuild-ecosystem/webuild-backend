"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const spesseSchema = new mongoose_1.Schema({
    from_id: {
        type: String,
        required: true,
    },
    to_id: {
        type: String,
        required: false,
    },
    data: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("spesse", spesseSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Blc3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS9zcGVzc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0M7QUFHeEMsTUFBTSxZQUFZLEdBQVcsSUFBSSxpQkFBTSxDQUNyQztJQUNJLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7S0FDaEI7SUFHRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7Q0FJSixFQUNELEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUNyQixDQUFBO0FBRUQsa0JBQWUsSUFBQSxnQkFBSyxFQUFjLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyJ9