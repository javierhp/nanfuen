import Layout from '../../components/layout';
import pricingData from '../../public/data/classes-pricing.json';
import PricingGrid from '../../components/planPricingGrid';
import PlanSearchBar from '../../components/planSearchBar';
import React, { useState } from 'react';
import { useLanguage } from '../../components/i18n/LanguageContext';

export default function Classes() {
  const { t } = useLanguage();
  const [filteredPlans, setFilteredPlans] = useState(pricingData);
  return (
    <Layout>
      <div className="container" style={{ paddingTop: 'var(--space-8)' }}>
        <p style={{ color: 'var(--color-text)' }}>{t('classes.formats')}</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          {t('classes.blue')}
          <a href="https://www.dolarito.ar/" target="_blank" rel="noreferrer" style={{ marginLeft: '4px' }}>
            aqui
          </a>
        </p>
        <PlanSearchBar plans={pricingData} setFilteredPlans={setFilteredPlans} />
        <div style={{ marginTop: 'var(--space-6)' }}>
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
