import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Cillum est excepteur voluptate culpa quis ea magna voluptate ea amet anim voluptate sint. </p>
        <p className={styles.text}>Eu ea Lorem aliquip deserunt commodo officia deserunt consequat.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>Ninja Listings</a>
        </Link>
      </div>
    </>
  )
}
