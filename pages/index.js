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
      <div className={styles.container}>
        <Head>
          <title>Nanfuen</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section className={utilStyles.headingMd}>
            <p>Nanfuen bonsai Argentina</p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
              <Image
                src="/images/small.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={320} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </p>
          </section>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}
