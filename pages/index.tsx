import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

// My Components
import Nav from '@/components/Nav'
import Latestnews from '@/components/Latestnews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nasa Apod - Home</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-0 m-0 box-border bg-black'>
        <Nav />
        <Latestnews />
      </main>
    </>
  )
}