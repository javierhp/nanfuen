import Layout from '../../components/layout';
import Image from 'next/image';
import { useLanguage } from '../../components/i18n/LanguageContext';
import firstImage from '../../public/images/shohin/5.jpg';
import secondImage from '../../public/images/shohin/2.jpg';
import thirdImage from '../../public/images/shohin/3.jpg';
import fourthImage from '../../public/images/shohin/4.jpg';
import fifthImage from '../../public/images/shohin/5.jpg';
import sixthImage from '../../public/images/shohin/6.jpg';
import seventhImage from '../../public/images/shohin/7.jpg';

export default function Shohin() {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h2 className="dark-text">
                {t('shohin.section1.title')}
              </h2>
              <p className="light-text">
                {t('shohin.section1.text1')}
              </p>
              <Image className="rounded mt-4" src={firstImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">
                {t('shohin.section2.title')}
              </h3>
              <p className="light-text">{t('shohin.section2.text1')}</p>
              <p className="light-text">{t('shohin.section2.text2')}</p>
              <p className="light-text">{t('shohin.section2.text3')}</p>
              <Image className="rounded mt-4" src={secondImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">
                {t('shohin.section3.title')}
              </h3>
              <p className="light-text">{t('shohin.section3.text1')}</p>
              <p className="light-text">{t('shohin.section3.text2')}</p>
              <Image className="rounded mt-4" src={thirdImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">{t('shohin.section4.title')}</h3>
              <p className="light-text">{t('shohin.section4.text1')}</p>
              <p className="light-text">{t('shohin.section4.text2')}</p>
              <Image className="rounded mt-4" src={fourthImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">{t('shohin.section5.title')}</h3>
              <p className="light-text">{t('shohin.section5.text1')}</p>
              <p className="light-text">{t('shohin.section5.text2')}</p>
              <Image className="rounded mt-4" src={fifthImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">{t('shohin.section6.title')}</h3>
              <p className="light-text">{t('shohin.section6.text1')}</p>
              <p className="light-text">{t('shohin.section6.text2')}</p>
              <Image className="rounded mt-4" src={sixthImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>

            <section className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 className="dark-text">{t('shohin.section7.title')}</h3>
              <p className="light-text">{t('shohin.section7.text1')}</p>
              <p className="light-text">{t('shohin.section7.text2')}</p>
              <Image className="rounded mt-4" src={seventhImage} height={300} alt="Bonsai Shohin" style={{ objectFit: 'cover' }} />
            </section>
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
