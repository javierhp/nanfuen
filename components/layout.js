import Menu from "./menu";
import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';

const name = 'Nanfuen';
export const siteTitle = 'Nanfuen Sample Website';

export default function Layout({ children }) {
    return <Container>
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
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="d-flex h-100 p-3 mr-auto flex-column w-100">
            <header>
                <Menu></Menu>
            </header>
            {children}
        </div>
    </Container>;
}