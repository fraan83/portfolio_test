import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Portfolio from '../components/Portfolio'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Test </title>
        <meta name="description" content="Portofolio test valutazione Spindox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 <Portfolio />


      <footer className={styles.footer}>
        <a
          href="https://francescogreco.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
           Francesco Greco - © 2021
        </a>
      </footer>
    </div>
  )
}
