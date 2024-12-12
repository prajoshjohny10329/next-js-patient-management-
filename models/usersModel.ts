import { model, models } from "mongoose"
import { Schema } from "mongoose"

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    phone: {
        type: String,
        required: true,
        // unique: true,
    },
})

export const User = models.User || model('User', userSchema)
