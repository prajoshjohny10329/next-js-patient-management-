import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    console.log('his');
    return Response.json({message: "hi"})
    
}