import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


export const UserInfo = async() => {

  // un moyen rapide d'accéder à des infos générales d'un user
  // Next a déjà définis les dites infos génériques (nom, mail et image)
  const {data: session} = useSession()
  return (
    <div>
        <div>
            Nom: <span>{session?.user?.name}</span>
        </div>

        <div>
            Adresse mail: <span>{session?.user?.email}</span>
        </div>

        <button onClick={signOut()}>Déconnexion</button>
    </div>
  )
}
