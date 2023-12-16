import Image from 'next/image'
import styles from './page.module.css'
import Summary from '@/app/components/summary/summary'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="logo_content">
        Bienvenido a &nbsp;&nbsp;
        <img src="/assets/images/logo.png" width={200} />
      </div>
      <Summary />
    </main>
  )
}
