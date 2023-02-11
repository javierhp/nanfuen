import Menu from "./menu";
import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Nanfuen';
export const siteTitle = 'Nanfuen Sample Website';

export default function Layout({ children }) {
    return <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Nanfuen bonsai Argentina"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
            <Menu></Menu>
        </header>
        {children}
    </div>;
}