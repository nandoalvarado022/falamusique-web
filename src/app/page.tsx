import Image from 'next/image'
import styles from './page.module.css'
import Summary from '@/app/components/summary/summary'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
    </main>
  )
}
