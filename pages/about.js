import Layout from '../components/layout';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className={styles.title}>Descubre nuestra historia / Discover our journey</h1>

              {/* Our Beginning Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Nuestro comienzo / Our Beginning</h2>
                <div className={styles.textBlock}>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      Nanfuen comienza como una idea despues del primer viaje a Japon (en 2014) y
                      haber estudiado en Taisho-en por primera vez.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      Nanfuen began as an idea after the first trip to Japan (in 2014) and having
                      studied at Taisho-en for the first time.
                    </p>
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/Fuji_trip.jpg"
                      width={600}
                      height={400}
                      alt="First trip to Japan"
                    />
                    <p className={styles.caption}>First trip to Japan (2014)</p>
                  </div>
                </div>
              </section>

              {/* Meaning Behind Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>El significado de Nanfuen / The Meaning Behind Nanfuen</h2>
                <div className={styles.textBlock}>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      El nombre Nanfuen significa Viento del sur y fue elegido por mi Oyakata
                      Nobuichi Urushibata, despues de preguntarle si podria comenzar mi propio estudio de
                      bonsai.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      The name Nanfuen means South Wind and was chosen by my Oyakata Nobuichi
                      Urushibata after asking him if I could start my own bonsai studio.
                    </p>
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/Naming.jpg"
                      width={660}
                      height={400}
                      alt="Naming ceremony"
                    />
                    <p className={styles.caption}>Naming ceremony by Nobuichi Urushibata</p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      Dato curioso: el viento del sur en Japon se caracteriza por ser calido y
                      apacible, especialmente en Shizuoka, el viento del sur en Argentina se caracteriza
                      por ser frio pero tambien es muy representativo. Oyakata se rio bastante cuando se
                      lo conte.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      Fun fact: the south wind in Japan is characterized by being warm and gentle,
                      especially in Shizuoka, while the south wind in Argentina is cold but also very
                      significant. Oyakata laughed a lot when I told him.
                    </p>
                  </div>
                </div>
              </section>

              {/* Milestones Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Logros y hitos / Milestones and Achievements</h2>
                <div className={styles.textBlock}>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      Desde entonces, hemos trabajado en establecer un lugar donde poder compartir
                      nuestra pasion por el bonsai, a traves de clases, demostraciones y material de
                      calidad para que todos puedan disfrutar de este arte.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      Since then, we have worked to establish a place where we can share our passion
                      for bonsai through classes, demonstrations, and quality material so that everyone
                      can enjoy this art.
                    </p>
                  </div>
                  <div className={styles.imageContainer}>
                    <Image
                      src="/images/demo.jpg"
                      width={600}
                      height={400}
                      alt="Bonsai demonstration"
                    />
                    <p className={styles.caption}>Sharing knowledge through demonstrations</p>
                  </div>
                </div>
              </section>

              {/* Mission Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Nuestra misión / Our Mission</h2>
                <div className={styles.textBlock}>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      Nuestra misión es hacer el bonsai accesible a todos, proporcionando educación
                      de calidad y materiales confiables. Creemos en mantener vivas las tradiciones
                      mientras adoptamos métodos modernos de enseñanza.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      Our mission is to make bonsai accessible to everyone by providing quality
                      education and reliable materials. We believe in keeping traditions alive while
                      embracing modern teaching methods.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Contáctanos / Contact Us</h2>
                <div className={styles.textBlock}>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>ES</span>
                    <p className={styles.paragraph}>
                      ¿Interesado en comenzar tu viaje en el bonsai? Estamos aquí para ayudarte.
                      Contáctanos para más información sobre clases, materiales o cualquier consulta.
                    </p>
                  </div>
                  <div className={styles.languageBlock}>
                    <span className={styles.languageLabel}>EN</span>
                    <p className={styles.paragraph}>
                      Interested in starting your bonsai journey? We're here to help. Contact us for
                      more information about classes, materials, or any inquiries.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
 