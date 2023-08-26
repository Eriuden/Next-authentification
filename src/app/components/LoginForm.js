"use client"

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const LoginForm = async() => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signIn("credentials", {
        name, 
        password, 
        redirect: false,
      })

      if(res.error) {
        setError("Invalid credentials")
        return
      }

      router.replace("dashboard")
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div>
        <div>
            <h1>Entrez vos identifiants</h1>

            <form onSubmit={handleSubmit}>
                <input onChange={(e)=> setname(e.target.value)} type="text" placeholder='nom'/>
                <input onChange={(e)=> setpassword(e.target.value)}type="password" placeholder='mot de passe'/>
                <input type="submit" value="connexion"/>

              {error && (
                <div>{error}</div>
              )}
                
            </form>

            <Link href={"/register"}>
                Pas encore de compte ? <span>Inscription</span>
            </Link>
        </div>
    </div>
  )
}
