import type { NextPage } from 'next'
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';

const Home: NextPage = () => {
  return (<>
    <Head>
      <meta name='description' content="Ope Supply is your one stop shop for all things midwestern merchandise." />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>Ope Supply | Coming Soon</title>
    </Head>
    <section>
      <Navbar />
    </section>
    </>
  )
}

export default Home
