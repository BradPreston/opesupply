import type { NextPage } from 'next'
import { useEffect } from 'react';
import Construction from '../components/construction/construction';
import Head from 'next/head';

const Home: NextPage = () => {
  useEffect(() => {
    document.querySelector('main')?.style.setProperty('--vh', window.innerHeight/100 + 'px');
    window.addEventListener('resize', () => {
      document.querySelector('main')?.style.setProperty('--vh', window.innerHeight/100 + 'px');
    })
  }, []);
  return (<>
    <Head>
      <meta name='description' content="Ope Supply is your one stop shop for all things midwestern merchandise." />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>Ope Supply | Coming Soon</title>
    </Head>
    <main>
      <Construction />
    </main>
    </>
  )
}

export default Home
