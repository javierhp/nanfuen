import Layout from "../components/layout";
import pricingData from '../public/data/classes-pricing.json';
import Image from 'next/image';
import firstImage from '../public/images/shohin/5.jpg';
import secondImage from '../public/images/shohin/2.jpg';
import thirdImage from '../public/images/shohin/3.jpg';
import fourthImage from '../public/images/shohin/4.jpg';
import fifthImage from '../public/images/shohin/5.jpg';
import sixthImage from '../public/images/shohin/6.jpg';
import seventhImage from '../public/images/shohin/7.jpg';

export default function Shohin() {
    const plans = pricingData;
    return (
        <Layout>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <section className="text-center">
                            <h2 className="dark-text">Bonsáis Shohin - Un mundo fascinante</h2>
                            <p className="lead light-text">Imagina un rincón de tu hogar transformado en un oasis de serenidad, donde la naturaleza se encuentra en perfecta armonía con la elegancia. Bienvenido al mundo fascinante de los bonsáis Shohin, donde la belleza se revela en cada centímetro.</p>
                            <Image className="rounded" src={firstImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Pequeños gigantes con historia</h3>
                            <p className="light-text">En este reino diminuto, cada Shohin es más que un simple árbol en maceta; es una obra maestra viva que cuenta su propia historia.</p>
                            <p className="light-text">Estamos hablando de pequeños gigantes, con alturas que oscilan entre 15 y 25 cm, aunque a menudo se encuentran joyas más preciadas que no superan los 21 cm.</p>
                            <p className="light-text">Imagina, en este espacio compacto, la oportunidad de cultivar una colección diversa con una variedad de especies, cada una representando la esencia única de la naturaleza.</p>
                            <Image className="rounded" src={secondImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-right">
                            <h3 className="dark-text">Detalles que cuentan historias</h3>
                            <p className="light-text">Estos tesoros vivientes no solo son accesibles, son portales hacia un mundo donde la atención meticulosa a los detalles se convierte en un ritual apasionante.</p>
                            <p className="light-text">Cada rama, cada hoja, cuenta su propia historia, y tú eres el narrador. En el universo de los Shohin, encontrarás un desafío emocionante que te invita a explorar la paciencia y la precisión.</p>
                            <Image className="rounded" src={thirdImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Elegancia en tu hogar</h3>
                            <p className="light-text">Ahora, visualiza este escenario: un Shohin cuidadosamente posicionado en tu hogar, destacando en un tokonoma, un nicho japonés destinado a exhibir objetos de arte.</p>
                            <p className="light-text">Su belleza se despliega desde todos los ángulos, revelando la meticulosidad de su diseño y transportándote a un estado de calma y admiración.</p>
                            <Image className="rounded" src={fourthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Pasión por los Shohin</h3>
                            <p className="light-text">En mi vivero, nos sumergimos en el mundo de los Shohin con una pasión que nació en las tierras del sol naciente.</p>
                            <p className="light-text">Cada árbol en nuestro cuidado es una conexión directa con mi fascinación mientras estudiaba en Japón. Aquí, te ofrecemos más que simples plantas en macetas; te presentamos a artistas vivientes listos para ser parte de tu historia.</p>
                            <Image className="rounded" src={fifthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-right">
                            <h3 className="dark-text">Eficiencia inspiradora</h3>
                            <p className="light-text">¿Te imaginas tener la capacidad de trabajar con estos tesoros vivientes, esculpiendo su forma en menos tiempo que con árboles más grandes?</p>
                            <p className="light-text">Sí, en el mundo de los Shohin, la atención al detalle se combina con la practicidad, permitiéndote no solo disfrutar de su belleza sino también crear con una eficiencia inspiradora.</p>
                            <Image className="rounded" src={sixthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-center">
                            <h3 className="dark-text">Descubre el encanto único</h3>
                            <p className="light-text">Así que te invito a descubrir el encanto único de los Shohin en nuestro vivero. Cada uno de ellos cuenta una historia, y estoy emocionado por la posibilidad de que el próximo capítulo sea tuyo.</p>
                            <p className="light-text">¿Listo para comenzar tu viaje en este mundo fascinante de miniaturas vivientes?</p>
                            <Image className="rounded" src={seventhImage} height={200} alt="Image description" />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}