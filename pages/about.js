import Layout from "../components/layout";
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <p className="font-italic text-muted mb-4">
              Nanfuen comienza como una idea despues del primer viaje a Japon (en 2014) y haber estudiado en Taisho-en por primera vez.
            </p>
            <Image src="/images/Fuji_trip.jpg" className="rounded" width={300} height={200} />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 px-6 mx-auto">
            <p className="font-italic text-muted mb-4">
              El nombre Nanfuen significa Viento del sur y fue elegido por mi Oyakata Nobuichi Urushibata, despues de preguntarle si podria comenzar mi propio estudio de bonsai.
            </p>
            <div className="  d-flex justify-content-end">
              <Image src="/images/Naming.jpg" className="rounded" width={330} height={200} />
            </div>
            <p className="font-italic text-muted mb-4">
              Dato curioso: el viento del sur en Japon se caracteriza por ser calido y apacible, especialmente en Shizuoka, el viento del sur en Argentina se caracteriza por ser frio pero tambien es muy representativo. Oyakata se rio bastante cuando se lo conte.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="  d-flex">
              <Image src="/images/Oyakata_shipaku.jpg" className="rounded" width={300} height={200} />
            </div>
            <p className="font-italic text-muted mb-4">
              El primer viaje me mostró el largo camino de conocimientos para recorrer asi que para 2016 planeé volver. Ese año pude ver de nuevo la Kokufu ten, como tambien ayudar a montar una pequeña muestra en una exhibición de autos de lujo, así como también preparar árboles para un evento político. 2016 fue un año especial también porque Oyakata me regaló el nombre para el vivero (Nanfuen) y porque a la vuelta comenzamos con los talleres en Córdoba.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 px-6 mx-auto">
            <div className="  d-flex justify-content-end">
              <Image src="/images/Cordoba_workshop_2.jpg" className="rounded" width={300} height={200} />
            </div>
            <p className="font-italic text-muted mb-4">
              En 2018 empezamos con los talleres en Tucuman y seguimos con los de Cordoba, a su vez también hicimos el primer taller en casa (Buenos Aires). Para Octubre ya estábamos de nuevo en Japón, donde tuve el honor de conocer el jardin de Kimura-san como también Shunkaen (de Kobayashi-san) e incluso hubo tiempo para ir a la Shuga-ten (segunda exhibición más grande de Shohin bonsai en Japón).
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="  d-flex">
              <Image src="/images/Oyakata_primer_minister.jpg" className="rounded" width={250} height={350} />
            </div>
            <p className="font-italic text-muted mb-4">
              La situación de pandemia nos llevó a trasladar tanto ventas como taller a formato online, ampliando también los productos que hoy podemos ofrecer.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 px-6 mx-auto">
            <div className="  d-flex justify-content-end">
              <Image src="/images/new_oyakata.png" className="rounded" width={300} height={400} />
            </div>
            <p className="font-italic text-muted mb-4">
              Ya en el 2023 logramos volver a donde todo empezo, a Taisho-en, ya con Taiga Urushibata como nuestro nuevo Oyakata, aquella persona que admiraba desde el primer viaje a partir de ese dia tendria el honor que corrigiera mi trabajo y poder tener esas charlas como las que tenia con su padre, las alegrias que te da el arte del bonsai!
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <p className="font-italic text-muted mb-4">
              Hoy a casi 10 años del primer viaje que seria el puntapie inicial de esta aventura llamada Nanfuen, puedo decir que he tenido el honor de trabajar, estudiar y compartir con dos de las personas que mas admiro en bonsai. Pude trabajar arboles para exhibiciones, ver arboles evolucionar, poder comenzar a dar clases y comenzar un sueño al que llamo Nanfuen.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}