import Image from 'next/image'
import styles from './page.module.css'
import Summary from '@/components/summary/summary'

export default function Home() {
  return (
    <main className={styles.main}>
      <Summary />
    </main>
  )
}
