"use client";

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

export default function Login() {
    const [document, setDocument] = React.useState('')
    const router = useRouter()
    const [buttonLabel, setButtonLabel] = React.useState('Ingresar')

    const loginHandle = async () => {
        setButtonLabel("Cargando...")
        const res = await fetch('/assets/data.json')
        const data = await res.json()
        const userData = data.find((item: any) => item.document == document)
        if(!userData){
            setButtonLabel("Ingresar")
            return alert('Usuario no encontrado')
        }
        localStorage.setItem('userData', JSON.stringify(userData))
        router.push('/')
    }

    return <div>
        <div className={styles.card}>
            <input className="form-field" type="tel" placeholder="Escribe aquí tu documento de identidad" onChange={(e) => setDocument(e.target.value)} />

            {/* Buttons */}
            <div className={`buttons ${styles.buttons}`}>
                <button className="secondary" onClick={loginHandle}>
                    {buttonLabel}
                </button>
                <button className="primary">
                    Comprar paquete de Piano
                </button>
                <button className="primary">
                    Comprar paquete de Guitarra
                </button>
                <button className="primary">
                    Saber más de Falamusique
                </button>
            </div>
        </div>
    </div>
}