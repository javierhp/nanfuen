import Layout from '../../components/layout';
import Image from 'next/image';
import { useLanguage } from '../../components/i18n/LanguageContext';
import styles from '../../styles/About.module.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="dark-text">{t('about.title')}</h1>

              <section className={styles.section}>
                <h2 className="dark-text">{t('about.beginning.title')}</h2>
                <div className={styles.textBlock}>
                  <p className={styles.paragraph}>{t('about.beginning.text')}</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/Fuji_trip.jpg"
                      width={600}
                      height={400}
                      alt="First trip to Japan"
                    />
                    <p className={styles.caption}>{t('about.beginning.caption')}</p>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className="dark-text">{t('about.meaning.title')}</h2>
                <div className={styles.textBlock}>
                  <p className={styles.paragraph}>{t('about.meaning.text1')}</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/Naming.jpg"
                      width={660}
                      height={400}
                      alt="Naming ceremony"
                    />
                    <p className={styles.caption}>{t('about.meaning.caption')}</p>
                  </div>
                  <p className={styles.paragraph}>{t('about.meaning.text2')}</p>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className="dark-text">{t('about.milestones.title')}</h2>
                <div className={styles.textBlock}>
                  <p className={styles.paragraph}>{t('about.milestones.text')}</p>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/demo.jpg"
                      width={600}
                      height={400}
                      alt="Bonsai demonstration"
                    />
                    <p className={styles.caption}>{t('about.milestones.caption')}</p>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className="dark-text">{t('about.mission.title')}</h2>
                <div className={styles.textBlock}>
                  <p className={styles.paragraph}>{t('about.mission.text')}</p>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className="dark-text">{t('about.contact.title')}</h2>
                <div className={styles.textBlock}>
                  <p className={styles.paragraph}>{t('about.contact.text')}</p>
                </div>
              </section>
            </div>
          </div>
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
