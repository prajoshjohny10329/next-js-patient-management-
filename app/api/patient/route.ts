import { NextRequest } from "next/server";


export async function POST(req: NextRequest){
    console.log('patient api POST route');
    const patientData = await req.json()
    
}