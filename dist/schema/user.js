"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    from_id: {
        type: String,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    lastname: {
        type: String,
        require: true,
    },
    type: {
        type: Number,
        require: true,
    },
    birth: {
        type: String,
        require: true,
    },
    placebirth: {
        type: String,
        require: true,
    },
    cap: {
        type: String,
        require: true,
    },
    telefono: {
        type: String,
        require: true,
    },
    cellulare: {
        type: String,
        require: true,
    },
    direction: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    prov: {
        type: String,
        require: true,
    },
    note: {
        type: String,
        require: true,
    },
    prima: {
        type: String,
        require: true,
    },
    intervento: {
        type: String,
        require: true,
    },
    post: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWEvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUF5QztBQU96QyxNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDNUIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFFBQVEsRUFBQztRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUVELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtDQUNGLEVBQ0MsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQ3JCLENBQUM7QUFHRixrQkFBZSxJQUFBLGdCQUFLLEVBQU8sT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDIn0=