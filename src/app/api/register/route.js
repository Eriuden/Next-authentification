import { NextResponse } from 'next/server'
import { connectMongoDB } from '../../../../lib/mongodb'
import User from '../../../../models/user'

export async function POST(req) {
    try {
        const {name, email, password, passwordConf} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB()
        await User.create({name,email,password: hashedPassword,passwordConf})

        return NextResponse.json({message: "utilisateur enregistré"}, 
        {status:201})
    } catch (error) {
        return NextResponse.json({message: "erreur lors de l'inscription"},
        {status:500})
    }
}
