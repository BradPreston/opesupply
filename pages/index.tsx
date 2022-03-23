import type { NextPage } from 'next'
import { useEffect } from 'react';
import Construction from '../components/construction/construction';

const Home: NextPage = () => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      document.querySelector('main')?.style.setProperty('--vh', window.innerHeight/100 + 'px');
    })
  }, []);
  return (
    <main>
      <Construction />
    </main>
  )
}

export default Home
