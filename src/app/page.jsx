'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword } from '@/supabase/utils'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import Button from '../components/Button'
import Input from '@/components/Input'

import { useRouter } from 'next/navigation';

export default function Home() {
  const { user, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()

  const signInHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
    if (user) router.replace('/Cliente')
  }, [user]);


  return (

    <div className={style.container}>
      <header className={style.header}></header>
      <main className={style.main}>
        <Image src="/logo-main.svg" width="200" height="200" alt="User" />
        <br />
        <br />
        <form className={style.form} onSubmit={signInHandler}>
          <h4 className={style.subtitle}>Iniciar Sesión</h4>
          <br />
          <label htmlFor="">Correo</label>
          <Input type="text" placeholder="example@gmail.com" />
          <br />
          <label htmlFor="">Contraseña</label>
          <Input  type="password" placeholder="contraseña" />
          <br />
          <div className={style.buttonsContainer}>
            <Button theme='Primary' >Iniciar Sesion</Button>
          </div>
          <br />
          <div className={style.linkContainer} ><Link href="/SignUp" className={style.link}>Olvidaste tu Contraseña</Link></div>
          <br />
          <div className={style.linkContainer} >No tienes una cuenta? <Link href="/SignUp" className={style.link}>Registrate</Link></div>
          {/* {userDB && userDB.login && <div className={style.linkContainer} >No tienes una cuenta? <Link href="/SignUp" legacyBehavior><a className={style.link}>Registrate</a></Link></div>} */}
        </form>
      </main>
      {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
    </div>

  )
}
