import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Menu from '../components/menu';
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className='container'>
        <main role="main" className="inner cover">
          <Image
            src="/images/Fulllogo1b.svg" // Route of the image file
            height={200} // Desired size with correct aspect ratio
            width={320} // Desired size with correct aspect ratio
            alt="Nanfuen"
            className="rounded"
          />
          <h1 className="cover-heading">Nanfuen Bonsai</h1>
          
        <p className="lead">Ideado en Japon, con raices argentinas</p>
        <p className="lead">
          <a href="https://www.facebook.com/NanfuenBonsai" target="_blank" className="btn">
            <img src="/images/fb_logo.png" width="20em"/>
            Visitanos en Facebook
          </a>
          <a href="https://www.instagram.com/nan.fu.en" target="_blank" className="btn">
            <img src="/images/in_logo.png" width="25em"/>
            Seguinos en Instagram
          </a>
          <a href="https://www.youtube.com/channel/UCe56m0m-lP51rcDG-O1sjpg" target="_blank" className="btn">
            <img src="/images/yt_logo.png" width="25em"/>
            Miranos en Youtube
          </a>
        </p>
        </main>

        {/* <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer> */}
      </div>
    </Layout>
  )
}
