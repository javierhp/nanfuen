import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './i18n/LanguageContext';

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer style={{
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--space-12) 0 var(--space-6) 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)'
        }}>
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Link href="/" aria-label="Nanfuen Bonsai — Home">
              <Image
                src="/images/logo-iso.svg"
                alt="Nanfuen Bonsai"
                width={80}
                height={60}
                style={{ filter: 'brightness(1.2)' }}
              />
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>
              {t('home.subtitle')}
            </p>
          </div>

          {/* Links Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-heading)', marginBottom: 'var(--space-2)' }}>
              Enlaces
            </h4>
            <Link href={`/${locale}/about`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>{t('nav.about')}</Link>
            <Link href={`/${locale}/classes`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>{t('nav.classes')}</Link>
            <Link href={`/${locale}/catalog`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>{t('nav.catalog')}</Link>
            <Link href={`/${locale}/shohin`} style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>{t('nav.shohin')}</Link>
          </div>

          {/* Social Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-heading)', marginBottom: 'var(--space-2)' }}>
              Social
            </h4>
            <a href="https://www.instagram.com/nan.fu.en" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>Instagram</a>
            <a href="https://www.facebook.com/NanfuenBonsai" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>Facebook</a>
            <a href="https://www.youtube.com/channel/UCe56m0m-lP51rcDG-O1sjpg" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '0.9rem' }}>YouTube</a>
          </div>
        </div>

        {/* Copyright separator */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            {t('footer.copyright')}
          </p>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
