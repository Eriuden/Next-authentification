"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'


export const RegisterForm = async() => {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault();
        const terms = document.getElementById('terms')
        if (!name || !mail || !password || !passwordConf || !terms.isChecked) {
            setError("Veuillez remplir tout les champs");
        }

        try {

            const userExistRes = await fetch("api/userExist", {
                method: "POST",
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify({mail}),
            })

            const {user} = await userExistRes.json()

            if (user) {
                setError("Cet utilisateur existe déjà")
                return
            }
            const res = await fetch(`api/register`, {
                method:"POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name, mail, password, passwordConf
                }),
            })

            if (res.ok) {
                const form = e.target;
                form.reset()
                router.push("/")
            } else {
                console.log("Echec de l'inscription")
            }
        } catch (err) {
            console.log("Erreur durant l'inscription")
        }
    };

        return (
            <div>
                <div>
                    <h1>Entrez vos identifiants</h1>
        
                    <form onSubmit={handleSubmit}>
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
