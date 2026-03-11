import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from './i18n/LanguageContext';
import styles from './menu.module.css';

export default function Menu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();

  const otherLocale = locale === 'es' ? 'en' : 'es';

  // Switch language and navigate to the translated route
  const handleLanguageSwitch = () => {
    setLocale(otherLocale);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('nanfuen-locale', otherLocale);
    }
    
    // Attempt to swap the base locale in the current URL path
    const pathParts = router.pathname.split('/');
    if (pathParts[1] === '[locale]') {
      // Replace [locale] in the pathname but we actually need asPath to preserve dynamic segments
      // like /es/catalog/Pot to /en/catalog/Pot
      const currentUrl = router.asPath;
      const newUrl = currentUrl.replace(`/${locale}`, `/${otherLocale}`);
      router.push(newUrl);
    } else {
      router.push(`/${otherLocale}`);
    }
  };

  const navLinks = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/shohin`, label: t('nav.shohin') },
    { href: `/${locale}/classes`, label: t('nav.classes') },
  ];

  const catalogLinks = [
    { href: `/${locale}/catalog`, label: t('nav.all') },
    { href: `/${locale}/catalog/tree`, label: t('nav.trees') },
    { href: `/${locale}/catalog/Pot`, label: t('nav.pots') },
    { href: `/${locale}/catalog/Tools`, label: t('nav.tools') },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.brand} aria-label="Nanfuen Bonsai — Home">
          <Image
            src="/images/logo-iso.svg"
            alt="Nanfuen Bonsai"
            width={44}
            height={33}
            priority
            className={styles.brandLogo}
          />
        </Link>

        {/* Desktop nav links */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Catalog dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setCatalogOpen(true)}
            onMouseLeave={() => setCatalogOpen(false)}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownTrigger} ${router.pathname.startsWith('/catalog') ? styles.active : ''}`}
              aria-haspopup="true"
              aria-expanded={catalogOpen}
            >
              {t('nav.catalog')}
              <span className={styles.chevron} aria-hidden="true">›</span>
            </button>
            {catalogOpen && (
              <div className={styles.dropdownMenu}>
                {catalogLinks.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.dropdownItem}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side: Language toggle */}
        <div className={styles.navRight}>
          <button
            className={styles.langToggle}
            onClick={handleLanguageSwitch}
            aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Español'}`}
            title={`Switch to ${otherLocale === 'en' ? 'English' : 'Español'}`}
          >
            <span className={locale === 'es' ? styles.langActive : styles.langInactive}>ES</span>
            <span className={styles.langDivider}>/</span>
            <span className={locale === 'en' ? styles.langActive : styles.langInactive}>EN</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.mobileDrawerOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${router.pathname === link.href ? styles.mobileLinkActive : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileCatalogLabel}>{t('nav.catalog')}</div>
          {catalogLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.mobileLink} ${styles.mobileLinkIndented}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
