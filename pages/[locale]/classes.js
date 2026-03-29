import Layout from '../../components/layout';
import pricingData from '../../public/data/classes-pricing.json';
import PricingGrid from '../../components/planPricingGrid';
import PlanSearchBar from '../../components/planSearchBar';
import React, { useState } from 'react';
import { useLanguage } from '../../components/i18n/LanguageContext';

export default function Classes() {
  const { t, locale } = useLanguage();

  // Virtual classes are only available in Argentina (ES locale)
  const availablePlans = pricingData.filter(p => locale === 'es' || !p.virtual);
  const [filteredPlans, setFilteredPlans] = useState(availablePlans);

  // Keep filtered plans in sync when locale changes
  React.useEffect(() => {
    setFilteredPlans(availablePlans);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <Layout>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <p style={{ color: 'var(--color-text)' }}>{t('classes.formats')}</p>

        {/* Blue dollar note — only relevant for Argentina */}
        {locale === 'es' && (
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            {t('classes.blue')}
            <a href="https://www.dolarito.ar/" target="_blank" rel="noreferrer" style={{ marginLeft: '4px' }}>
              aqui
            </a>
          </p>
        )}

        <PlanSearchBar plans={availablePlans} setFilteredPlans={setFilteredPlans} />

        <div style={{ marginTop: 'var(--space-6)' }}>
          <h2 style={{ color: 'var(--color-text)', marginBottom: 'var(--space-2)' }}>
            {t('classes.priceLabel')}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: 'var(--space-4)' }}>
            {t('classes.priceNote')}
          </p>
          <PricingGrid plans={filteredPlans} />
        </div>
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
