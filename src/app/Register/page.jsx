'use client'
import { writeUserData} from '@/supabase/utils'
import { useUser } from '@/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import {withAuth} from '@/HOCs/withAuth'


import { useRouter } from 'next/navigation';

function Home() {

    const { user, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    const router = useRouter()

    const [rol, setRol] = useState('Cliente')
    const [ciudad, setCiudad] = useState('La paz')


    const onClickHandler = (name, value)  =>  {
        setRol(value)
    }
    const onClickHandlerCity = (name, value)  =>  {
        setCiudad(value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        let nombre = e.target[0].value
  
        writeUserData('Users', {id: user.id, nombre, rol, ciudad})
      }

      console.log(user)

    return (

        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <Image src="/logo-main.svg" width="200" height="200" alt="User" />
                <br />
                <br />
                <form className={style.form} onSubmit={registerHandler}>
                    <h4 className={style.subtitle}>Registrate</h4>
                    <br />
                    <label htmlFor="">Nombre</label>
                    <Input className={style.input} type="text" placeholder="" />
                    <br />
                    <label htmlFor="">Tipo de cuenta</label>
              


                   
                    <Select arr={['Cliente', 'Medico', 'Clinica', 'Distribuidor']} name='rol' click={onClickHandler} />



                    <br />
                    <label htmlFor="">Ciudad</label>
                    <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandlerCity} />
                    <br />
                    <div className={style.buttonsContainer}>
                        <Button theme='Primary' >Registrate</Button>
                    </div>
                    <br />
                    <div className={style.linkContainer} ><Link href="/SignUp" legacyBehavior><a className={style.link}>Olvidaste tu Contraseña</a></Link></div>
                    <br />
                    <div className={style.linkContainer} >Ya tienes una cuenta? <Link href="/" className={style.link}>Iniciar Sesión</Link></div>
                    {/* {userDB && userDB.login && <div className={style.linkContainer} >No tienes una cuenta? <Link href="/SignUp" legacyBehavior><a className={style.link}>Registrate</a></Link></div>} */}
                </form>
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}


export default Home