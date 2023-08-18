import Link from 'next/link'
import React from 'react'

export const LoginForm = () => {
  return (
    <div>
        <div>
            <h1>Entrez vos identifiants</h1>

            <form>
                <input type="text" placeholder='nom'/>
                <input type="password" placeholder='mot de passe'/>
                <button onClick={}>Connexion</button>

                <div>Message d'erreur</div>
            </form>

            <Link href={"/register"}>
                Pas encore de compte ? <span>Inscription</span>
            </Link>
        </div>
    </div>
  )
}
