/* Précision: si ce nom de "route" est toujours employée, 
c'est juste qu'il est nécessaire au routing de base de Next */

import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";
import { connectMongoDB } from "../../../../../lib/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs"

export const authOptions = {
 providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {},
        
        async authorize(credentials) {
            const {email,password} = credentials

            try {
                await connectMongoDB()
                    const user = await User.findOne ({email})

                    if (!user) {
                        return null 
                    }

                    const passwordOk = await bcrypt.compare(password, user.password)

                    if (!passwordOk) {
                        return null
                    }

                    return user
            }
            catch (err) {
              console.log(err)
            }
        },
    }),
 ],
 session: {
    strategy: "jwt",
 },
 secret: process.env.NEXTAUTH_SECRET,
 pages: {
    signIn: "/",
 },
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}