"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const billingSchema = new mongoose_1.Schema({
    from_id: {
        type: String,
        required: true,
    },
    to_id: {
        type: String,
        required: false,
    },
    from_name: {
        type: String,
        required: true
    },
    to_name: {
        type: String,
        required: true
    },
    to_lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    iva: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("billing", billingSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlsbGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWEvYmlsbGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF3QztBQUd4QyxNQUFNLGFBQWEsR0FBVyxJQUFJLGlCQUFNLENBQ3RDO0lBQ0ksT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNoQjtJQUVELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFdBQVcsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELGNBQWMsRUFBRTtRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtDQUdKLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUE7QUFFRCxrQkFBZSxJQUFBLGdCQUFLLEVBQWUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDIn0=