"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const treatmentSchema = new mongoose_1.Schema({
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
    from_name: {
        type: String,
        required: true
    },
    to_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("treatments", treatmentSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlYXRtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjaGVtYS90cmVhdG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0M7QUFHeEMsTUFBTSxlQUFlLEdBQVcsSUFBSSxpQkFBTSxDQUN4QztJQUNJLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtDQUdKLEVBQ0QsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUE7QUFFRCxrQkFBZSxJQUFBLGdCQUFLLEVBQWlCLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQyJ9