'use client'

import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
import Button from '../components/Button'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()

  function next(e) {
    e.preventDefault()
    // router.push(rol)
}


  return (

    <div className={style.container}>
      <header className={style.header}></header>
      <main className={style.main}>
        <Image src="/logo-main.svg" width="200" height="200" alt="User" />
        <br />
        <br />
        <form className={style.form}>
          <h4 className={style.subtitle}>Iniciar Sesión</h4>
          <br />
          <label htmlFor="">Correo</label>
          <input className={style.input} type="text" placeholder="example@gmail.com" />
          <br />
          <label htmlFor="">Contraseña</label>
          <input className={style.input} type="password" placeholder="contraseña" />
          <br />
          <div className={style.buttonsContainer}>
            <Button theme='Primary' click={next} >Iniciar Sesion</Button>
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
