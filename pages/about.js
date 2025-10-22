import Layout from '../components/layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="py-5">
        <h2>Descubre nuestra historia / Discover our journey</h2>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <h3>Nuestro comienzo / Our Beginning</h3>
              <p className="font-italic text-muted mb-4">
                [ES] Nanfuen comienza como una idea despues del primer viaje a Japon (en 2014) y
                haber estudiado en Taisho-en por primera vez.
                <br />
                <br />
                [EN] Nanfuen began as an idea after the first trip to Japan (in 2014) and having
                studied at Taisho-en for the first time.
              </p>
              <Image
                src="/images/Fuji_trip.jpg"
                className="rounded"
                width={300}
                height={200}
                alt="First trip to Japan"
              />
              <figcaption>First trip to Japan (2014)</figcaption>
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 px-6 mx-auto">
              <h3>El significado de Nanfuen / The Meaning Behind Nanfuen</h3>
              <p className="font-italic text-muted mb-4">
                [ES] El nombre Nanfuen significa Viento del sur y fue elegido por mi Oyakata
                Nobuichi Urushibata, despues de preguntarle si podria comenzar mi propio estudio de
                bonsai.
                <br />
                <br />
                [EN] The name Nanfuen means South Wind and was chosen by my Oyakata Nobuichi
                Urushibata after asking him if I could start my own bonsai studio.
              </p>
              <div className="d-flex justify-content-end">
                <Image
                  src="/images/Naming.jpg"
                  className="rounded"
                  width={330}
                  height={200}
                  alt="Naming ceremony"
                />
                <figcaption>Naming ceremony by Nobuichi Urushibata</figcaption>
              </div>
              <p className="font-italic text-muted mb-4">
                [ES] Dato curioso: el viento del sur en Japon se caracteriza por ser calido y
                apacible, especialmente en Shizuoka, el viento del sur en Argentina se caracteriza
                por ser frio pero tambien es muy representativo. Oyakata se rio bastante cuando se
                lo conte.
                <br />
                <br />
                [EN] Fun fact: the south wind in Japan is characterized by being warm and gentle,
                especially in Shizuoka, while the south wind in Argentina is cold but also very
                significant. Oyakata laughed a lot when I told him.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <h3>Logros y hitos / Milestones and Achievements</h3>
              <div className="d-flex">
                <Image
                  src="/images/Oyakata_shipaku.jpg"
                  className="rounded"
                  width={300}
                  height={200}
                  alt="Oyakata Shipaku"
                />
              </div>
              <p className="font-italic text-muted mb-4">
                [ES] El primer viaje me mostró el largo camino de conocimientos para recorrer asi
                que para 2016 planeé volver. Ese año pude ver de nuevo la Kokufu ten, como tambien
                ayudar a montar una pequeña muestra en una exhibición de autos de lujo, así como
                también preparar árboles para un evento político. 2016 fue un año especial también
                porque Oyakata me regaló el nombre para el vivero (Nanfuen) y porque a la vuelta
                comenzamos con los talleres en Córdoba.
                <br />
                <br />
                [EN] The first trip showed me the long path of knowledge to traverse, so in 2016 I
                planned to return. That year I was able to see the Kokufu ten again, as well as help
                set up a small display at a luxury car exhibition, and prepare trees for a political
                event. 2016 was also special because Oyakata gave me the name for the nursery
                (Nanfuen) and because upon my return we started workshops in Córdoba.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 px-6 mx-auto">
              <div className="d-flex justify-content-end">
                <Image
                  src="/images/Cordoba_workshop_2.jpg"
                  className="rounded"
                  width={300}
                  height={200}
                  alt="Workshop in Cordoba"
                />
                <figcaption>Workshop in Cordoba</figcaption>
              </div>
              <p className="font-italic text-muted mb-4">
                [ES] En 2018 empezamos con los talleres en Tucuman y seguimos con los de Cordoba, a
                su vez también hicimos el primer taller en casa (Buenos Aires). Para Octubre ya
                estábamos de nuevo en Japón, donde tuve el honor de conocer el jardin de Kimura-san
                como también Shunkaen (de Kobayashi-san) e incluso hubo tiempo para ir a la
                Shuga-ten (segunda exhibición más grande de Shohin bonsai en Japón).
                <br />
                <br />
                [EN] In 2018 we started workshops in Tucuman and continued with those in Cordoba,
                and we also held the first workshop at home (Buenos Aires). By October we were back
                in Japan, where I had the honor of visiting Kimura-san's garden as well as Shunkaen
                (by Kobayashi-san), and there was even time to go to the Shuga-ten (the second
                largest Shohin bonsai exhibition in Japan).
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <h3>Adaptándonos al cambio / Adapting to Change</h3>
              <div className="d-flex">
                <Image
                  src="/images/Oyakata_primer_minister.jpg"
                  className="rounded"
                  width={250}
                  height={350}
                  alt="Adapting to Change"
                />
              </div>
              <p className="font-italic text-muted mb-4">
                [ES] La situación de pandemia nos llevó a trasladar tanto ventas como taller a
                formato online, ampliando también los productos que hoy podemos ofrecer.
                <br />
                <br />
                [EN] The pandemic situation led us to move both sales and workshops online, also
                expanding the products we can offer today.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 px-6 mx-auto">
              <h3>Mirando hacia adelante / Looking Ahead</h3>
              <div className="d-flex justify-content-end">
                <Image
                  src="/images/new_oyakata.png"
                  className="rounded"
                  width={300}
                  height={400}
                  alt="New Oyakata"
                />
                <figcaption>Taiga Urushibata, our new Oyakata</figcaption>
              </div>
              <p className="font-italic text-muted mb-4">
                [ES] Ya en el 2023 logramos volver a donde todo empezo, a Taisho-en, ya con Taiga
                Urushibata como nuestro nuevo Oyakata, aquella persona que admiraba desde el primer
                viaje a partir de ese dia tendria el honor que corrigiera mi trabajo y poder tener
                esas charlas como las que tenia con su padre, las alegrias que te da el arte del
                bonsai!
                <br />
                <br />
                [EN] By 2023 we managed to return to where it all started, to Taisho-en, now with
                Taiga Urushibata as our new Oyakata, the person I admired since the first trip. From
                that day on, I had the honor of having him correct my work and being able to have
                conversations like the ones I had with his father, the joys that the art of bonsai
                gives you!
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <h3>Hoy y más allá / Today and Beyond</h3>
              <p className="font-italic text-muted mb-4">
                [ES] Hoy a casi 10 años del primer viaje que seria el puntapie inicial de esta
                aventura llamada Nanfuen, puedo decir que he tenido el honor de trabajar, estudiar y
                compartir con dos de las personas que mas admiro en bonsai. Pude trabajar arboles
                para exhibiciones, ver arboles evolucionar, poder comenzar a dar clases y comenzar
                un sueño al que llamo Nanfuen.
                <br />
                <br />
                [EN] Today, almost 10 years after the first trip that would be the starting point of
                this adventure called Nanfuen, I can say that I have had the honor of working,
                studying, and sharing with two of the people I admire most in bonsai. I have worked
                on trees for exhibitions, seen trees evolve, started teaching, and begun a dream
                called Nanfuen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
