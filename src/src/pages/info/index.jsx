import React from 'react'
import Layout from '../../components/Layout'
import store from '../../redux/store'
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';



export default function InfoPage() {
    return (
        <Provider store={store}>
            <Helmet>
                <title>MODASPORTS - TERMINOS Y CONDICIONES</title>
                <meta name="description" content="TERMINIOS Y CONDICIONES" />
                {/* <link rel="apple-touch-icon" href={cover_photo} /> */}
            </Helmet>
            <Layout>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Términos y condiciones de ModaSports.com</h3>
                    <h2>Aspectos Generales</h2>

                    <p>modasports.com</p>

                    <p>Al ingresar a este sitio reconoce y acepta los siguientes términos y condiciones, por favor léalos detenidamente.</p>

                    <p>Si no está usted de acuerdo con estos términos, no haga uso de este sitio web.</p>

                    <p>modasports.com es un sitio en internet en el que puede encontrar contenidos, artículos, adquirir artículos, entre otros. Dentro de los contenidos que puede observar y adquirir,
                        le ofrecemos artículos en vestimenta. Este contenido está en constante cambio</p>

                    <p>En modasports.com cada vez que se utilice
                        en ambiente web o dispositivos móviles, estará igualmente sujeto a los lineamientos, términos y condiciones particulares aplicables.
                        Al ingresar en este sitio usted acepta que lo usa de manera responsable y bajo su propio riesgo, de forma que ninguna de las partes involucradas para crear, producir
                        o entregar este sitio es responsable de ningún daño directo, incidental, consecuente, indirecto o punitivo ni de otras pérdidas, costos o gastos de ningún tipo
                        (incluyendo honorarios legales, honorarios de expertos u otros desembolsos) que puedan surgir, directa o indirectamente, por el acceso a, uso de o búsqueda en este sitio
                        o por bajar algún material, dato, texto, imagen, video o audio de este sitio, incluyendo pero no limitándose a cualquier cosa
                        que pase por un virus, errores del sistema (pulgas), procedimiento humano o falta de procedimiento humano o mal funcionamiento de algún sistema de cómputo, línea telefónica, hardware,
                        software o programa o cualquier otro error, falla o retraso en transmisiones electrónicas o conexiones de red.
                    </p>

                    <p>
                        Al ingresar en este sitio, usted reconoce y acepta que cualquier nombre, logotipo,
                        marca registrada o marca de servicio que aparezca en este sitio es propiedad o está
                        autorizado por modasports.com y no puede ser usado por usted sin previa autorización
                        escrita. modasports hará cumplir sus derechos de propiedad intelectual. Su obtención, reproducción,
                        distribución, cesión, transmisión, transformación, modificación, explotación o comunicación
                        pública para uso comercial o distinto al propio personal del usuario queda totalmente prohibido.
                        Modificar, republicar o usar el material de este sitio para algún otro fin, viola los derechos de
                        modasports. Cualquier uso no autorizado de estos materiales puede estar sujeto a penalidades o daños,
                        incluyendo pero no limitándose a aquellos relacionados con la violación de derechos de autor, de
                        marcas registradas, de privacidad y de publicidad.
                    </p>
                    <p>
                        Somos cuidadosos en la presentación de especificaciones, características,
                        ilustraciones, equipo y otra información contenida en este sitio; sin embargo,
                        se basa en información al día, y aunque hacemos todo el esfuerzo razonable por
                        asegurar que el material en este sitio sea correcto, no se puede garantizar
                        exactitud, le ofrecemos disculpas por el cambio de algún artículo;
                        le informamos también que algunos artículos podrían variar en color o tamaño.
                        Toda información de contenido y materiales incluidos en este sitio se proporcionan
                        “TAL CUAL” SIN GARANTÍA DE NINGÚN TIPO, NI EXPRESA NI IMPLICADA, INCLUYENDO PERO NO
                        LIMITÁNDOSE A LA GARANTÍA IMPLÍCITA DE COMERCIABILIDAD, ADAPTABILIDAD PARA UN PROPÓSITO
                        EN PARTICULAR, TÍTULO Y NO CONTRAVENCIÓN.
                    </p>

                    <h2>Política de privacidad y protección de datos</h2>
                    <p>
                        Este sitio utiliza un elementos denominados localStorage y sessionStorage son
                        propiedades que acceden al objeto Storage y tienen la función de almacenar
                        datos de manera local, la diferencia entre éstas dos es que localStorage
                        almacena la información de forma indefinida o hasta que se decida limpiar los
                        datos del navegador y sessionStorage almacena información mientras la pestaña
                        donde se esté utilizando siga abierta, una vez cerrada, la información se
                        elimina, el uso de estos estara limitado a:
                        contenido visitado, información digitada en el sitio e información relevante
                        para el desarrollo del sitio o para las actividades comerciales que promueve el sitio.
                        Dicha información es utilizada para uso técnico principalmente (pero no exclusivamente)
                        para adaptar el sitio web para el mejor beneficio del visitante.
                        Al ingresar a este sitio acepta la utilización de estos elementos y su
                        almacenamiento y uso en su computador, así como el uso de la información
                        que dichas cookies proporcionan si es el caso.

                        Si usted no desea aceptar el uso de estos elementos para este sitio,
                        su navegador de internet puede ser programado para automáticamente
                        denegar su uso  o para informarle cada
                        vez que el sitio solicite el uso
                        Asi mismo, informacion almacenads en su computadora anteriormente
                        o durante el uso de este sitio puede borrarlas a través de las opciones
                        que dispone su navegador de Internet. Asimismo puede consultar la opción
                        de “ayuda” de su buscador de Internet para más información sobre este tema.
                    </p>

                    <h2>Uso Inapropiado</h2>

                    <p>
                        El acceso a modasports.com podrá ser revocado si se utiliza contra los fines,
                        propósitos y regulaciones del sitio. Queda terminantemente prohibido: (a) interferir
                        con el Servicio de modasports.com mediante el uso de virus o cualquier otro programa
                        o tecnología diseñados para interrumpir, entorpecer, afectar o dañar cualquier software
                        o hardware, información o contenido del sitio; (b) modificar, crear trabajos derivados de,
                        ingeniería inversa, descompilar o desensamblar cualquier tecnología utilizada para proporcionar
                        servicio; (c) el uso de un robot, arañas u otro dispositivo, programas o procesos para monitorear
                        la actividad del sitio o usuarios o copiar páginas del sitio, u obtener información de usuarios,
                        el uso de contadores o tecnología similar; (d) recopilar direcciones de correo electrónico u
                        otra información de terceros mediante modasports.com; (e) hacerse pasar por otra persona o
                        entidad o por modasports.com, (f) utilizar en cualquier meta tags, los términos de búsqueda,
                        los términos clave, o similares que contengan el nombre de modasports.com (g) queda
                        expresamente prohibida la introducción de hiperenlaces con fines mercantiles en páginas web
                        ajenas a modasports.com (h) participar en cualquier actividad que interfiera con la
                        capacidad de otro usuario de usar o disfrutar del servicio de ve.epaenlinea.com (i)
                        ayudar o alentar a un tercero en participar en cualquier actividad prohibida por estas
                        Condiciones de servicio, la moral o las buenas costumbres o las leyes aplicables.
                    </p>

                    <h2>Formas de Pago</h2>

                    <p>
                        Las formas en que puede satisfacer el pago de su compra, se mostraran al momento de responder la compra, e
                        incluyen transferencias a bancos nacionales e internacionales (debidamente individualizados y especificados)
                        a las cuentas que modasports indicará. Debe escoger la opción que se acomode a sus intereses e intenciones.
                    </p>
                    <p>
                        Ningún producto o servicio se considerará pagado hasta que el banco acredite los fondos en las cuentas
                        de modasports y el personal de modasports confirme el depósito efectivo en las cuentas correspondientes. Toda compra
                        realizada por medio de modasports.com se tiene como una compra en firme, las devoluciones se atenderán
                        según lo dispuesto en la política de devoluciones.

                    </p>
                    <h2>  Aspectos legales</h2>
                    <p>

                        Al ingresar este sitio usted reconoce y acepta que cualquier interpretación y
                        evaluación que se haga sobre el mismo o las transacciones a través de él, se
                        harán de conformidad a las leyes de la República Bolivariana de Venezuela. Cualquier
                        acción legal, reclamo o procedimiento que surja, se ventilará exclusivamente ante las
                        autoridades o jurisdicción venezolana. Si usted usa este sitio web desde otro país,
                        es responsable de cumplir con todas las leyes locales aplicables. EPA no hace ninguna

                        declaración de que los materiales contenidos en este sitio son apropiados para países
                        fuera de la República Bolivariana de Venezuela.
                    </p>

                </div>
            </Layout>
        </Provider>

    )
}