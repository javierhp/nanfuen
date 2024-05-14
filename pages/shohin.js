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
                            <h2 className="dark-text">Bonsáis Shohin - Un mundo fascinante / Bonsai Shohin - A Fascinating World</h2>
                            <p className="lead light-text">
                              [ES] Imagina un rincón de tu hogar transformado en un oasis de serenidad, donde la naturaleza se encuentra en perfecta armonía con la elegancia. Bienvenido al mundo fascinante de los bonsáis Shohin, donde la belleza se revela en cada centímetro.
                              <br/><br/>
                              [EN] Imagine a corner of your home transformed into an oasis of serenity, where nature meets elegance in perfect harmony. Welcome to the fascinating world of Shohin bonsai, where beauty is revealed in every inch.
                            </p>
                            <Image className="rounded" src={firstImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Pequeños gigantes con historia / Small Giants with History</h3>
                            <p className="light-text">
                              [ES] En este reino diminuto, cada Shohin es más que un simple árbol en maceta; es una obra maestra viva que cuenta su propia historia.
                              <br/><br/>
                              [EN] In this tiny realm, each Shohin is more than just a potted tree; it is a living masterpiece that tells its own story.
                            </p>
                            <p className="light-text">
                              [ES] Estamos hablando de pequeños gigantes, con alturas que oscilan entre 15 y 25 cm, aunque a menudo se encuentran joyas más preciadas que no superan los 21 cm.
                              <br/><br/>
                              [EN] We are talking about small giants, with heights ranging from 15 to 25 cm, though often more precious gems are found that do not exceed 21 cm.
                            </p>
                            <p className="light-text">
                              [ES] Imagina, en este espacio compacto, la oportunidad de cultivar una colección diversa con una variedad de especies, cada una representando la esencia única de la naturaleza.
                              <br/><br/>
                              [EN] Imagine, in this compact space, the opportunity to cultivate a diverse collection with a variety of species, each representing the unique essence of nature.
                            </p>
                            <Image className="rounded" src={secondImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-right">
                            <h3 className="dark-text">Detalles que cuentan historias / Details that Tell Stories</h3>
                            <p className="light-text">
                              [ES] Estos tesoros vivientes no solo son accesibles, son portales hacia un mundo donde la atención meticulosa a los detalles se convierte en un ritual apasionante.
                              <br/><br/>
                              [EN] These living treasures are not only accessible; they are portals to a world where meticulous attention to detail becomes an exciting ritual.
                            </p>
                            <p className="light-text">
                              [ES] Cada rama, cada hoja, cuenta su propia historia, y tú eres el narrador. En el universo de los Shohin, encontrarás un desafío emocionante que te invita a explorar la paciencia y la precisión.
                              <br/><br/>
                              [EN] Every branch, every leaf, tells its own story, and you are the narrator. In the Shohin universe, you will find an exciting challenge that invites you to explore patience and precision.
                            </p>
                            <Image className="rounded" src={thirdImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Elegancia en tu hogar / Elegance in Your Home</h3>
                            <p className="light-text">
                              [ES] Ahora, visualiza este escenario: un Shohin cuidadosamente posicionado en tu hogar, destacando en un tokonoma, un nicho japonés destinado a exhibir objetos de arte.
                              <br/><br/>
                              [EN] Now, visualize this scenario: a Shohin carefully positioned in your home, standing out in a tokonoma, a Japanese alcove for displaying art objects.
                            </p>
                            <p className="light-text">
                              [ES] Su belleza se despliega desde todos los ángulos, revelando la meticulosidad de su diseño y transportándote a un estado de calma y admiración.
                              <br/><br/>
                              [EN] Its beauty unfolds from every angle, revealing the meticulousness of its design and transporting you to a state of calm and admiration.
                            </p>
                            <Image className="rounded" src={fourthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-left">
                            <h3 className="dark-text">Pasión por los Shohin / Passion for Shohin</h3>
                            <p className="light-text">
                              [ES] En mi vivero, nos sumergimos en el mundo de los Shohin con una pasión que nació en las tierras del sol naciente.
                              <br/><br/>
                              [EN] In my nursery, we dive into the world of Shohin with a passion that was born in the land of the rising sun.
                            </p>
                            <p className="light-text">
                              [ES] Cada árbol en nuestro cuidado es una conexión directa con mi fascinación mientras estudiaba en Japón. Aquí, te ofrecemos más que simples plantas en macetas; te presentamos a artistas vivientes listos para ser parte de tu historia.
                              <br/><br/>
                              [EN] Every tree under our care is a direct connection to my fascination while studying in Japan. Here, we offer you more than just potted plants; we present living artists ready to be part of your story.
                            </p>
                            <Image className="rounded" src={fifthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-right">
                            <h3 className="dark-text">Eficiencia inspiradora / Inspiring Efficiency</h3>
                            <p className="light-text">
                              [ES] ¿Te imaginas tener la capacidad de trabajar con estos tesoros vivientes, esculpiendo su forma en menos tiempo que con árboles más grandes?
                              <br/><br/>
                              [EN] Can you imagine having the ability to work with these living treasures, sculpting their form in less time than with larger trees?
                            </p>
                            <p className="light-text">
                              [ES] Sí, en el mundo de los Shohin, la atención al detalle se combina con la practicidad, permitiéndote no solo disfrutar de su belleza sino también crear con una eficiencia inspiradora.
                              <br/><br/>
                              [EN] Yes, in the world of Shohin, attention to detail combines with practicality, allowing you to not only enjoy their beauty but also create with inspiring efficiency.
                            </p>
                            <Image className="rounded" src={sixthImage} height={200} alt="Image description" />
                        </section>

                        <section className="text-center">
                            <h3 className="dark-text">Descubre el encanto único / Discover the Unique Charm</h3>
                            <p className="light-text">
                              [ES] Así que te invito a descubrir el encanto único de los Shohin en nuestro vivero. Cada uno de ellos cuenta una historia, y estoy emocionado por la posibilidad de que el próximo capítulo sea tuyo.
                              <br/><br/>
                              [EN] So I invite you to discover the unique charm of Shohin in our nursery. Each one of them tells a story, and I am excited about the possibility that the next chapter will be yours.
                            </p>
                            <p className="light-text">
                              [ES] ¿Listo para comenzar tu viaje en este mundo fascinante de miniaturas vivientes?
                              <br/><br/>
                              [EN] Ready to start your journey in this fascinating world of living miniatures?
                            </p>
                            <Image className="rounded" src={seventhImage} height={200} alt="Image description" />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
