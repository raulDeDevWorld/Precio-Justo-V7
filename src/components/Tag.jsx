'use client';

import style from './Tag.module.css'


export default function Button({styled, click, children}) {

    return (
        <span
            className={`${style.tag} ${style[styled]}`}
            onClick={click}
            >
            {children}
        </span>
    )
}