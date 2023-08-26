import React from 'react'
import { RegisterForm } from '../components/RegisterForm'
import { redirect } from 'next/dist/server/api-utils'
import {getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const page = async() => {
  const session = await getServerSession(authOptions)

  if (session) redirect("/dashboard")
  return <RegisterForm/>
}
