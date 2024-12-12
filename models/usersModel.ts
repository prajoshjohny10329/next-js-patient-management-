import { model } from "mongoose"
import { Schema } from "mongoose"


const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
})

export const UserModel = model('user',userSchema)
