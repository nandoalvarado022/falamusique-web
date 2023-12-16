"use client";

import Image from 'next/image'
import { motion } from "framer-motion"
import styles from './styles.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Summary = () => {
  const router = useRouter();
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  debugger;

  if(!userData["name"]) router.push('/login')
  // debugger;

  useEffect(() => {
    const bodyClassName = userData.instrumentName;
    if (document) {
      document.getElementsByTagName("body")[0].classList.remove('Guitarra', 'Piano')
      document.getElementsByTagName("body")[0].classList.add(bodyClassName)
    }
  }, [])

  return (
    <div className={`${styles.main_content}`}>
      <div className={styles['text1']}>
        Hola <span>{userData.name},</span> estas aprendiendo <span className={styles.number}>¡{userData.instrumentName}!</span>
      </div>

      <div className={`${styles.flex} ${styles.bg}`}>
        <div className={styles.instrument}
          style={userData.styles}
        >
          <motion.div
            initial={{ transform: "translateZ(8px) translateY(0px)" }}
            animate={{ transform: "translateZ(32px) translateY(-18px)" }}
            transition={{
              repeat: Infinity,
              // repeatDelay: 1, // Tiempo de espera entre repeticiones
              repeatType: "mirror",
              duration: 2, // Tiempo de duración de la animación
              ease: "easeInOut", // Tipo de easing
            }}
          >
            <img
              src={userData.image}
              width={200}
            />
          </motion.div>
        </div>

        <div>
          {/* Buttons */}
          <div className="buttons">
            <button className="secondary">
              Comprar Paquete
              <img src="/assets/images/notas.png" width={20} />
            </button>

            <button className="primary">
              Hablar con un <br />asesor
              <img src="/assets/images/support-icon.png" width={20} />
            </button>

            <button className="primary">
              Referir a un amigo
              <img src="/assets/images/friend.png" width={20} />
            </button>

            <Link href="/login" className="primary not-icon">
              Entrar con otro usuario
            </Link>
          </div>

          <div className={styles['text2']}>
            Te quedan 3 clases en el paquete llamado:
          </div>

          <div className={styles['text3']}>
            {userData.packageName}
            <span>Horario: Viernes 3:00 pm</span>
          </div>

          <div className={styles['large-description']}>
            <table>
              <tr>
                <td className={styles.icon}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png" alt="" width={20} />
                </td>
                <td>
                  Precio del paquete actual: $150.000, pagado el día 17 agosto 2012. <br /><br />
                </td>
              </tr>
              <tr>
                <td className={styles.icon}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png" alt="" width={20} />
                </td>
                <td>
                  En este nivel estas aprendiendo las principales técnicas de la guitarra, como el uso de las cuerdas, los acordes, los arpegios, los ritmos, las escalas, los solos, los riffs, los patrones, los acordes y las posiciones de las cuerdas.<br /><br />
                </td>
              </tr>
              <tr>
                <td className={styles.icon}>
                  <img src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png" alt="" width={20} />
                </td>
                <td>
                  Tocarás canciones faciles utilizando tus dos manos.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
