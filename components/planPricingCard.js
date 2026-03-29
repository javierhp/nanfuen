import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from './i18n/LanguageContext';
import styles from './planPricingCard.module.css';

export function PlanCard({ plan }) {
  const { locale, t } = useLanguage();

  const name = locale === 'en' ? plan.name_en : plan.name_es;
  const pack = locale === 'en' ? plan.pack_en : plan.pack_es;
  const features = locale === 'en' ? plan.features_en : plan.features_es;
  const priceVal = locale === 'en' ? plan.priceUSD_intl : plan.priceUSD_ar;
  const priceLabel = locale === 'en' ? 'Price (USD): ' : 'Precio (USD): ';
  const typeLabel = locale === 'en' ? 'Type: ' : 'Tipo: ';
  const typeVal = plan.category === 'in person'
    ? (locale === 'en' ? 'In Person' : 'Presencial')
    : (locale === 'en' ? 'Virtual' : 'Virtual');

  const btnEnroll = locale === 'en' ? 'Enroll' : 'Inscribirse';
  const btnMail = locale === 'en' ? 'Email us' : 'Escribinos por mail';
  const btnUnavailable = locale === 'en' ? 'Unavailable' : 'No disponible';

  return (
    <div className={`${styles.card} ${!plan.enabled ? styles.disabled : ''}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        {pack && <span className={styles.pack}>{pack}</span>}
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          {priceVal && <p className={styles.price}><span>{priceLabel}</span>{priceVal}</p>}
          {plan.category && <p className={styles.type}><span>{typeLabel}</span>{typeVal}</p>}
        </div>

        <ul className={styles.features}>
          {features && features.map((feature, i) => (
            <li key={i}>
              <span className={styles.check}>✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        {plan.category !== 'in person' && (
          <a
            className={`btn btn-primary ${styles.actionBtn}`}
            href={plan.enabled ? "https://forms.gle/KKtXu8vW3k6s1fF57" : undefined}
            tabIndex={plan.enabled ? 0 : -1}
          >
            {plan.enabled ? btnEnroll : btnUnavailable}
          </a>
        )}
        {(plan.id === 'workshop' || plan.id === 'custom' || name.includes('Workshop')) && (
          <button className={`btn btn-primary ${styles.actionBtn}`} disabled={!plan.enabled}>
            {plan.enabled ? btnMail : btnUnavailable}
          </button>
        )}
        {(name.includes('presencial') || name.includes('In-person')) && (
          <a
            className={`btn btn-primary ${styles.actionBtn}`}
            href={plan.enabled ? "https://forms.gle/HTX91yHzCr4Ab2q16" : undefined}
            tabIndex={plan.enabled ? 0 : -1}
          >
            {plan.enabled ? btnEnroll : btnUnavailable}
          </a>
        )}
      </div>
    </div>
  );
}

PlanCard.propTypes = {
  plan: PropTypes.object.isRequired
};
