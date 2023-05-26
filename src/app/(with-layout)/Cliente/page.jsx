'use client'

import style from './Cliente.module.css'
import Button from '../../../components/Button'
import Tag from '../../../components/Tag'
import { useRouter } from 'next/navigation';

import { useMask } from '@react-input/mask';


export default function Home() {
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const router = useRouter()


function seeMore  () {
    router.push('/Producto')
}


    return (


        <main className={style.main}>

            <div className={style.tagBox}>
                <label htmlFor="">Categorias</label>
                <Tag styled='tagPrimary'>Los mas recientes</Tag>
                <Tag styled='tagSecondary'>En oferta</Tag>
                <Tag styled='tagSecondary'>Recientes</Tag>
                <Tag styled='tagSecondary'>Otros</Tag>
            </div>



            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button styled='miniButtonSecondary'click={seeMore}>Comprar</Button>

                </div>
                <span>Nombre de la empresa</span>
            </div>

        </main>


    )
}