import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="container" style={{ backgroundColor: 'var(--color-background)' }}>
        <main className="flex flex-col items-center" style={{
          padding: 'var(--space-8) 0',
          minHeight: '100vh',
          backgroundColor: 'var(--color-background)'
        }}>
          <header className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <div style={{
              marginBottom: 'var(--space-8)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
              }} />
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
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              color: '#83A8FF'
            }}>
              Nanfuen Bonsai
            </h1>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-8)',
              maxWidth: '600px'
            }}>
              Ideado en Japon, con raices argentinas
            </p>
          </header>

          <section className="grid" style={{
            gap: 'var(--space-6)',
            maxWidth: '800px',
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
                    borderRadius: '12px',
                    background: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease-in-out',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.backgroundImage = 'var(--gradient-hover)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = ''; /* Reset to CSS class default or inherited */
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                  }}
                >
                  <Image src={social.icon} width={social.size} height={social.size} alt="" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </section>

          <section style={{
            padding: 'var(--space-8)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: '24px',
            maxWidth: '600px',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-soft)',
            background: 'var(--gradient-surface)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: '#83A8FF',
              opacity: 0.3
            }} />
            <p style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: 'var(--space-6)',
              textAlign: 'center',
              color: 'var(--color-text)',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              ¿Pasión por los shohin?
            </p>
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/shohin"
                style={{
                  display: 'inline-block',
                  padding: 'var(--space-3) var(--space-8)',
                  backgroundColor: '#232C43',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                  fontWeight: '500'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                  e.currentTarget.style.backgroundColor = '#2d3754';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.backgroundColor = '#232C43';
                }}
              >
                Descubre más
              </Link>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}
