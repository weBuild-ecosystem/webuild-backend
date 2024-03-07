"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const historySchema = new mongoose_1.Schema({
    from_id: {
        type: String,
        required: true,
    },
    to_id: {
        type: String,
        required: true,
    },
    to_name: {
        type: String,
        required: true,
    },
    ammount: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    from_name: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("histories", historySchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWEvaGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3QztBQUd4QyxNQUFNLGFBQWEsR0FBVyxJQUFJLGlCQUFNLENBQ3RDO0lBQ0UsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0gsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtDQUdGLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUE7QUFFRCxrQkFBZSxJQUFBLGdCQUFLLEVBQWUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDIn0=