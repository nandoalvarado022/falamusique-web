"use client";

import Image from 'next/image'
import { motion } from "framer-motion"
import styles from './styles.module.scss'

const Summary = () => {
  return (
    <section className={`${styles.main_content}`}>
      <div className={`${styles.flex} ${styles.bg}`}>
        <div className={styles.guitar}
          style={{
            transformStyle: "preserve-3d",
            // transform: "rotateY(-30deg) rotateX(15deg)"
          }}>
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
              src="https://www.ovationguitars.com/images/ovation/articleImages/OV531234/OV531234_1.png"
              width={200}
            />
          </motion.div>
        </div>

        <div>
          <div className={styles['text1']}>
            Hola <span>Julian,</span> te quedan <span className={styles.number}>3</span> clases en el paquete llamado:
          </div>

          <div className={styles['text2']}>
            Clases grupales de Guitarra Nivel 1
            <span>Horario: Viernes 3:00 pm</span>
          </div>

          <div className={styles['large-description']}>
            <table>
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

            {/* Buttons */}
            <div className={styles.buttons}>
              <button className={styles.primary}>
                Comprar Paquete
                <img src="/assets/images/notas.png" width={20} />
              </button>

              <button className={styles.primary}>
                Hablar con un <br />asesor
                {/* <img src="/assets/images/notas.png" width={20} /> */}
              </button>

              <button className={styles.primary}>
                Referir a un amigo
                {/* <img src="/assets/images/notas.png" width={20} /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary
