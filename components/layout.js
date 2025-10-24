import Menu from './menu';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

const name = 'Nanfuen';
export const siteTitle = 'Nanfuen Sample Website';

function Layout({ children }) {
  return (
    <div style={{ 
      backgroundColor: 'var(--color-background)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Head>
        <title>Nanfuen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Nanfuen bonsai Argentina" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#121212" />
      </Head>
      <header>
        <Menu />
      </header>
      <main style={{ 
        flex: 1,
        backgroundColor: 'var(--color-background)',
        position: 'relative',
        zIndex: 0
      }}>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;