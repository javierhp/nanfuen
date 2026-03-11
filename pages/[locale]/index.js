import Link from 'next/link';
import Layout from '../../components/layout';
import Image from 'next/image';
import { useLanguage } from '../../components/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container" style={{ backgroundColor: 'var(--color-bg)' }}>
        <main className="flex flex-col items-center" style={{
          padding: 'var(--space-8) 0',
          minHeight: '100vh',
          backgroundColor: 'var(--color-bg)'
        }}>
          <header className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{
              marginBottom: 'var(--space-8)',
              position: 'relative'
            }}>
              <Image
                src="/images/Fulllogo1b.svg"
                height={200}
                width={320}
                alt="Nanfuen Bonsai Logo"
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'brightness(1.2)'
                }}
              />
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-heading)'
            }}>
              {t('home.title')}
            </h1>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-8)',
              maxWidth: '600px',
              fontStyle: 'italic'
            }}>
              {t('home.subtitle')}
            </p>
          </header>

          <section className="grid" style={{
            gap: 'var(--space-6)',
            maxWidth: '600px',
            width: '100%',
            marginBottom: 'var(--space-12)'
          }}>
            <div className="flex justify-between" style={{
              gap: 'var(--space-4)',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {[
                { href: "https://www.facebook.com/NanfuenBonsai", icon: "/images/fb_logo.png", label: "Facebook", size: 20 },
                { href: "https://www.instagram.com/nan.fu.en", icon: "/images/in_logo.png", label: "Instagram", size: 25 },
                { href: "https://www.youtube.com/channel/UCe56m0m-lP51rcDG-O1sjpg", icon: "/images/yt_logo.png", label: "YouTube", size: 25 }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3) var(--space-4)',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                >
                  <Image src={social.icon} width={social.size} height={social.size} alt="" style={{ filter: 'grayscale(100%) opacity(0.8)' }} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </section>

          <section style={{
            padding: 'var(--space-8)',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--border-radius)',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              marginBottom: 'var(--space-6)',
            }}>
              {t('home.shohinTitle')}
            </h2>
            <Link
              href="/shohin"
              className="btn btn-primary"
            >
              {t('home.shohinCta')}
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.locale } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'es' } }
    ],
    fallback: false,
  };
}
