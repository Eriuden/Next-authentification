import { NextResponse } from "next/server"
import { connectMongoDB } from "../../../../lib/mongodb"
import User from "../../../../models/user"

export async function POST(req) {
    try {
        await connectMongoDB()
        const {email} = await req.json()
        const user = await User.findOne({email}).select("_id")
        consolr.log(user)
        return NextResponse.json({user})
    } catch (err) {

    }
  return (
    <div>route</div>
  )
}
