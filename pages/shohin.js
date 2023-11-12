import Layout from "../components/layout";
import pricingData from '../public/data/classes-pricing.json';

export default function Shohin() {
    const plans = pricingData;
    return (
        <Layout>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <section class="text-center">
                            <h2 class="dark-text">Bonsáis Shohin - Un mundo fascinante</h2>
                            <p class="lead light-text">Imagina un rincón de tu hogar transformado en un oasis de serenidad, donde la naturaleza se encuentra en perfecta armonía con la elegancia. Bienvenido al mundo fascinante de los bonsáis Shohin, donde la belleza se revela en cada centímetro.</p>
                        </section>

                        <section class="text-left">
                            <h3 class="dark-text">Pequeños gigantes con historia</h3>
                            <p class="light-text">En este reino diminuto, cada Shohin es más que un simple árbol en maceta; es una obra maestra viva que cuenta su propia historia.</p>
                            <p class="light-text">Estamos hablando de pequeños gigantes, con alturas que oscilan entre 15 y 25 cm, aunque a menudo se encuentran joyas más preciadas que no superan los 21 cm.</p>
                            <p class="light-text">Imagina, en este espacio compacto, la oportunidad de cultivar una colección diversa con una variedad de especies, cada una representando la esencia única de la naturaleza.</p>
                        </section>

                        <section class="text-right">
                            <h3 class="dark-text">Detalles que cuentan historias</h3>
                            <p class="light-text">Estos tesoros vivientes no solo son accesibles, son portales hacia un mundo donde la atención meticulosa a los detalles se convierte en un ritual apasionante.</p>
                            <p class="light-text">Cada rama, cada hoja, cuenta su propia historia, y tú eres el narrador. En el universo de los Shohin, encontrarás un desafío emocionante que te invita a explorar la paciencia y la precisión.</p>
                        </section>

                        <section class="text-left">
                            <h3 class="dark-text">Elegancia en tu hogar</h3>
                            <p class="light-text">Ahora, visualiza este escenario: un Shohin cuidadosamente posicionado en tu hogar, destacando en un tokonoma, un nicho japonés destinado a exhibir objetos de arte.</p>
                            <p class="light-text">Su belleza se despliega desde todos los ángulos, revelando la meticulosidad de su diseño y transportándote a un estado de calma y admiración.</p>
                        </section>

                        <section class="text-left">
                            <h3 class="dark-text">Pasión por los Shohin</h3>
                            <p class="light-text">En mi vivero, nos sumergimos en el mundo de los Shohin con una pasión que nació en las tierras del sol naciente.</p>
                            <p class="light-text">Cada árbol en nuestro cuidado es una conexión directa con mi fascinación mientras estudiaba en Japón. Aquí, te ofrecemos más que simples plantas en macetas; te presentamos a artistas vivientes listos para ser parte de tu historia.</p>
                        </section>

                        <section class="text-right">
                            <h3 class="dark-text">Eficiencia inspiradora</h3>
                            <p class="light-text">¿Te imaginas tener la capacidad de trabajar con estos tesoros vivientes, esculpiendo su forma en menos tiempo que con árboles más grandes?</p>
                            <p class="light-text">Sí, en el mundo de los Shohin, la atención al detalle se combina con la practicidad, permitiéndote no solo disfrutar de su belleza sino también crear con una eficiencia inspiradora.</p>
                        </section>

                        <section class="text-center">
                            <h3 class="dark-text">Descubre el encanto único</h3>
                            <p class="light-text">Así que te invito a descubrir el encanto único de los Shohin en nuestro vivero. Cada uno de ellos cuenta una historia, y estoy emocionado por la posibilidad de que el próximo capítulo sea tuyo.</p>
                            <p class="light-text">¿Listo para comenzar tu viaje en este mundo fascinante de miniaturas vivientes?</p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}