"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export const RegisterForm = async() => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")

        return (
            <div>
                <div>
                    <h1>Entrez vos identifiants</h1>
        
                    <form onSubmit={}>
                        <input onChange={(e)=>setName(e.target.value)} value={name}
                         type="text" id='name' placeholder='nom'/>
                        <input onChange={(e)=>setMail(e.target.value)} value={mail}
                        type="email" id='email' placeholder='Email'/>

                        <input onChange={(e)=>setPassword(e.target.value)} value={password}
                        type="password" id='password' placeholder='mot de passe'/>
                        <input onChange={(e)=>setPasswordConf(e.target.value)} value={passwordConf}
                         type="password" id='passwordConf' placeholder='Confirmer mot de passe'/>

                        <input type="checkbox" id='terms'/>
                        <label htmlFor='terms'>J'accepte les conditions du site</label>

                        <input type="submit" value="S'inscrire"/>
        
                        { error && (
                            <div>{error}</div>
                        )}
                        
                    </form>
        
                    <Link href={"/login"}>
                        Vous avez ddéjà un compte ? <span>Connexion</span>
                    </Link>
                </div>
            </div>
      )
}
