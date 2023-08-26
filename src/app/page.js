
import { LoginForm } from './components/LoginForm'
import { redirect } from 'next/dist/server/api-utils'
import {getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default function Home() {
  const session = getServerSession(authOptions)

  if (session) redirect("/dashboard")
  
  return (
    <main>
      <LoginForm/>
    </main>
  )
}
