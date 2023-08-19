import { NextResponse } from 'next/server'
import React from 'react'

export async function POST(req) {
    try {
        const {name, email, password, passwordConf} = await req.json()

        return NextResponse.json({message: "utilisateur enregistré"}, 
        {status:201})
    } catch (error) {
        return NextResponse.json({message: "erreur lors de l'inscription"},
        {status:500})
    }
}
