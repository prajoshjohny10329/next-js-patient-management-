import { User } from "@/models/usersModel";
import { connectDB } from "@/utils/connectDB";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params } : {params :{userId : string}}) {
    console.log("rout with user id");
    try {
        await connectDB();
        const { userId } = params;
        const user = await User.findOne({_id: userId})
        if(!user){
            return Response.json({ success: false, message: 'User Not Found' });
        }
        return Response.json({ success: true, user })
    } catch (error) {
        return Response.json({ success: false, message: 'Route Handling Error' });
    }
}
