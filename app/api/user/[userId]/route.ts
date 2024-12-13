import { User } from "@/models/usersModel";
import { connectDB } from "@/utils/connectDB";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    console.log("rout with user id");
    
    // try {
    //     const userData = await User.find({})
    //     return Response.json({ success: true, userData })
    // } catch (error) {
    //     return Response.json({ success: false, message: 'Not Found' });
    // }
}

export async function POST(req: NextRequest) {

    try {
        const { name, email, phone } = await req.json();

        await connectDB();

        const user = await User.create({
            name,
            email,
            phone,
        });
        return Response.json({  success: true, user })
    } catch (error) {
        console.log(error);
        
        return Response.json({ success: false, message: error });
    }
}