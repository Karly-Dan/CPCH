<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div class="contenido-cursos">
        <div class="contenedor-curso">
            <div class="titulo-cursos">
                <h1>Certificaciones Conocer</h1>
            </div>
            <div class="contenedor-video">
                <div>
                    <video src="https://cpch.s3.us-west-1.amazonaws.com/web/videos/conocer.mp4" autoplay controls></video>
                </div>
                <div class="texto-video">
                    <p>
                        Los programas de certificación de competencia laboral son basados con base en los Estándares de Competencia Laboral del Consejo Nacional de Normalización y Certificación CONOCER avalados por la Secretaría de Educación Pública SEP.
                        En los cuales se debe llevar a cabo un proceso de certificación: capacitación, evaluación, emisión del certificado.
                        <br><br><br>
                        <b>Modalidad:</b> Virtual y/o presencial
                    </p> 
                </div>
            </div>
        </div>
        <div>
            <div class="contenedor-tarjetas">
                <cursos-vue
                titulo="ECO217.01 Impartición de cursos de formación del capital humano de manera presencial grupal"
                imagen="presencial"
                />
                <cursos-vue
                titulo="ECO154 Prestación de los servicios de limpieza"
                imagen="limpieza"
                />
                <cursos-vue
                titulo="EC0054 Venta de productos ópticos"
                imagen="opticos"
                />
                <cursos-vue
                titulo="EC0305 Prestación de servicios de atención a clientes"
                imagen="cliente"
                />
                <cursos-vue
                titulo="EC0435 Prestación de servicios para la atención, cuidado y desarrollo integral de las niñas y los niños en Centros de Atención Infantil"
                imagen="infantil"
                />
                <cursos-vue
                titulo="EC0217.1 Impartición de cursos de formación del capital humano de manera presencial grupal "
                imagen="cp"
                />
                <cursos-vue
                titulo="EC0076 Evaluación de la competencia de candidatos con base en Estándares de Competencia"
                imagen="candidatos"
                />
            </div>
        </div>

        <div class="contenedor-microsoft"> 
            <div class="contenido-curso-micosoft">
            <h1>CERTIFICACIONES MICROSOFT</h1>
            <p>Este curso nos va a permitir demostrar nuestros conocimientos y habilidades con el uso de las tecnologías de Microsoft. </p>
            <div class="contenedor-img-certificacion">
                <img src="../assets/calidad.png" alt="" class="imagen-certificacion">
            </div>
            </div>
            <cursos-vue
            imagen="microsoft"
            titulo="Microsoft Excel"
            />
        </div>

        
        <div class="contenedor-servicios">
            <div >
            <h1>SERVICIOS</h1>
            </div>
            <p>DIAGNÓSTICO DE NECESIDADES CAPACITACIÓN DNC</p>
            <p>
            <b style="color: #FA742B;">Modalidad:</b> Virtual y/o presencial <br><br>
            <b style="color: #FA742B;">Objetivo: </b> Saber cuáles son los conocimientos, habilidades, actitudes, y/o problemáticas de la organización, a fin de proponer un programa de capacitación específico.
            </p>
        </div>

        <div class="contenedor-diploma">
            <h1>CURSOS Y DIPLOMADOS</h1>
            <p style="line-height: 30px; color: #5f5f5f;">
            Los programas de capacitación se dan en diversas modalidades con base en la propuesta de los temarios establecidos, en caso que la organización desee el ajuste con base en sus necesidades.
            Los programas se encuentran registrados en la Secretaría del Trabajo y Previsión Social.
            La entrega del documento a su conclusión será: constancias, reconocimiento o diploma, según corresponda.
            </p>
            <p>
            <b><img src="../assets/computadora.png" alt="" class="img-diploma"> Modalidad: </b>Virtual y/o presencial. <br><br>
            <b><img src="../assets/futuro.png" alt="" class="img-diploma"> Duración:  </b>A partir de 8 horas. <br><br>
            <b><img src="../assets/calendario.png" alt="" class="img-diploma"> Horario: </b> Las especificaciones de impartición y logística directamente con el cliente.<br><br>
            <b><img src="../assets/ceremonia-de-apertura.png" alt="" class="img-diploma"> Apertura: </b> A partir de 3 participantes.<br><br>
            <b><img src="../assets/costo.png" alt="" class="img-diploma"> Costos: </b> Cobro por hora de capacitación dependiendo de la duración y modalidad.<br><br>
            </p>
        </div>


        <div>
        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">EQUIPOS DE ALTO DESEMPEÑO</h1>
            <div class="contenedor-tarjeta">
                <p>
            <b>Objetivo: </b> 
            Al finalizar el curso/taller el participante será capaz de construir equipos efectivos capaces de lograr un propósito común, con enfoque a la productividad y logro de resultados que le permita a la organización su potencialización, a fin de aumentar la productividad y la satisfacción del cliente.
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Equipos y sinergia </li>
                <li>Etapas y desarrollo de los equipos </li>
                <li>Equipos de alto desempeño </li>
                <li>Características de los equipos de alto desempeño </li>
                <li>La formación de un equipo </li>
                <li>Cómo dirigir de forma efectiva los equipos de alto rendimiento </li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">GESTIÓN DE RESILENCIA EN LAS ORGANIZACIONES</h1>
            <div class="contenedor-tarjeta">
            <p>
            <b>Objetivo: </b> 
            Al finalizar el curso/taller el participante será capaz de desarrollar un proceso de revalorización personal con el fin de cambiar paradigmas con los que percibe la adversidad tanto en el área personal como laboral. 
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>La resiliencia y cómo influye en nuestro bienestar</li>
                <li>16 perfiles no resilientes. ¿Cúal eres tú? Plan de cambio</li>
                <li>7 estrategias que desarrollan nuestra resiliencia</li>
                <li>Reevaluar y afrontar tus proyectos desde una actitud resiliente</li>
                <li>Autorregulación emocional, motivación y resiliencia.</li>
                <li>Autocuidado y aprecio para fortalecer la resiliencia.</li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">
            GESTIÓN DEL ESTRÉS LABORAL
            </h1>
            <div class="contenedor-tarjeta">
            <p>
            <b>Objetivo: </b> 
            Al finalizar el curso/taller el participante será capaz de identificar los factores de estrés y los síntomas que lo caracterizan, asimismo, aplicará las técnicas y herramientas para afrontarlo de manera constructiva y energizante y crear situaciones de calma y eficacia.      
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Conceptos introductorios </li>
                <li>Conociendo el estrés  </li>
                <li>Que es el estrés, síntomas y consecuencias</li>
                <li>Estrategias y técnicas prácticas para gestionar el estrés </li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">INTELIGENCIA SOCIO-EMOCIONAL EN EL TRABAJO</h1>
            <div class="contenedor-tarjeta">
            <p>
                <b>Objetivo: </b> 
                Al finalizar el curso/taller, el participante será capaz de conocer sus emociones y aprender a gestionarlas, para relacionarse mejor con el resto del equipo y propiciar un desarrollo óptimo del trabajo. 
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Inteligencia emocional y componentes </li>
                <li>Emociones y dominio de uno mismo </li>
                <li>Las emociones de los otros </li>
                <li>Técnicas para aumentar la inteligencia emocional en el ámbito personal, familiar y laboral. </li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">GESTIÓN DEL TIEMPO</h1>
            <div class="contenedor-tarjeta">
            <p>
            <b>Objetivo: </b>  
            Al finalizar el taller el participante identificará las técnicas de gestión del tiempo para aplicar las que se ajusten a su estilo de vida, para aumentar la eficiencia, la efectividad y la productividad.
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Introducción</li>
                <li>Elasticidad temporal </li>
                <li>La filosofía de la gestión del tiempo </li>
                <li>Drenaje del tiempo </li>
                <li>Ladrones del tiempo </li>
                <li>El arte de concentrarse </li>
                <li>Toma de decisiones </li>
                <li>Tiempos muertos </li>
                <li>Técnicas sobre gestión del tiempo </li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">COMUNICACIÓN ASERTIVA Y HABILIDADES SOCIALES</h1>
            <div class="contenedor-tarjeta">
            <p>
            <b>Objetivo: </b> 
            Al finalizar el curso/taller el participante será capaz de utilizar los procesos comunicativos, tanto verbales como no verbales, para entablar relaciones saludables y asertivas con las personas que lo rodean. 
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Fundamentos en lenguaje y comunicación</li>
                <li>Entendiendo la naturaleza de las habilidades sociales</li>
                <li>Comunicación asertiva </li>
                <li>Técnicas de comunicación, habilidades sociales y desarrollo interpersonal </li>
                <li>Habilidades sociales y desarrollo interpersonal. </li>
            </div>
            </div>
        </div>

        <div class="tarjetas-cursos-y-diplomas">
            <h1 class="titulo-diplomados">LOS 10 COLORES DEL TALENTO</h1>
            <div class="contenedor-tarjeta">
            <p>
                <b>Objetivo: </b> 
                Los participantes identificarán las características de los 10 colores del talento, así como también distinguirán algunas estrategias para desarrollar el potencial de sus competencias y talentos.
            </p>
            <div>
                <h1 class="temario">Temario:</h1>
                <li>Introducción sobre los colores del talento</li>
                <li>Los órdenes del amor de Bert Hellinger</li>
                <li>Dinámica de los lentes</li>
                <li>Colores de acción</li>
                <li>Colores de relación</li>
                <li>Colores de pensar</li>
                <li>¿Cómo potenciar nuestros talentos?</li>
                <li>¿Cómo potenciar los talentos de las demás personas?</li>
            </div>
            </div>
        </div>
        </div>

    </div>

    <footer-vue/>
  </main>
</template>

<script>
import cursosVue from '../components/cursos.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
import barraVue from '../components/barra.vue'

export default {
    components: {
        headerVue,
        footerVue,
        cursosVue,
        barraVue,
    }
}
</script>

<style>
body {
    margin: 0;
}
main {
    font-family: Arial, Helvetica, sans-serif;
}
.titulo-cursos {
    text-align: center;
}
.temario {
    color: #df612a;
    text-decoration: underline;
    font-size: 20px;

}

@media (max-width: 776px) {
    .titulo-diplomados {
        background-color: #021373;
        color: white;
    }
    .contenido-cursos {
        width: 85%;
        margin: auto;
    }
    video {
        width: 320px;
    }
    .contenedor-microsoft {
        margin: auto;
        padding: 14px;
        justify-content: space-evenly;
        border-radius: 50px;
        background-image: linear-gradient(109.6deg,#dfeaf7 11.2%,#f4f8fc 91.1%);
    }
    .imagen-certificacion {
        display: block;
        margin: auto;
        margin-bottom: 20px;
    }
    .contenedor-servicios {
        padding: 20px;
        margin: auto;
        border-radius: 50px;
        margin-top: 50px;
        line-height: 30px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .tarjetas-cursos-y-diplomas {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        margin: auto;
    }
    .contenedor-tarjeta {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        margin-bottom: 30px;
    }
    .titulo-diplomados {
        padding: 10px;
        text-align: center;
        background-image: linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );

    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-cursos {
        width: 45%;
        margin-bottom: 20px;
    }
    video {
        width: 670px;
        height: 320px;
    }
    .contenido-cursos {
        width: 95%;
        margin: auto;
    }
    .titulo-cursos {
        letter-spacing: 0.25em;
        word-spacing: 0.25em;
        color: #5f5f5f;
    }
    .texto-video {
        text-align: justify;
        line-height: 30px;
        color: #5f5f5f;
    }
    .contenedor-tarjetas {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    .titulo-diplomados {
        background-color: #021373;
        color: white;
    }
    .contenedor-microsoft {
        display: flex;
        margin: auto;
        padding: 20px;
        background-image: linear-gradient( 109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% );
        justify-content: space-evenly;
        width: 95%;
        border-radius: 50px;
    }
    .contenido-curso-micosoft {
        width: 45%;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }
    .contenedor-servicios {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        width: 85%;
        margin: auto;
        border-radius: 50px;
        margin-top: 50px;
        line-height: 30px;
    }
    .tarjetas-cursos-y-diplomas {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        width: 95%;
        margin: auto;
    }
    .contenedor-tarjeta {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        margin-bottom: 30px;
    }
    .titulo-diplomados {
        padding: 10px;
        text-align: center;
        background-image: linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );

    }


}

@media (min-width: 1024px) {
    .contenedor-tarjetas {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    video {
        width: 670px;
        height: 320px;
    }
    .contenedor-cursos {
        width: 23%;
        margin-right: 50px;
        margin-bottom: 40px;
        margin-top: 20px;
    }
    .titulo-diplomados {
        background-color: #021373;
        color: white;
    }
    .contenido-cursos {
        margin: auto;
    }
    .contenedor-video {
        display: flex;
        padding: 20px;
        margin-bottom: 30px;
    }
    .texto-video {
        text-align: end;
        line-height: 30px;
    }
    .titulo-cursos {
        letter-spacing: 0.25em;
        word-spacing: 0.25em;
        color: #5f5f5f;
    }
    .contenido-curso-micosoft {
        width: 45%;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }
    .contenedor-microsoft {
        display: flex;
        margin: auto;
        padding: 20px;
        background-image: linear-gradient( 109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% );
        justify-content: space-evenly;
        width: 95%;
        border-radius: 50px;
    }
    .contenedor-img-certificacion:hover .imagen-certificacion{
        transform: translateX(500px);
    }
    .imagen-certificacion {
        transition: transform 1s ease;
        transition-delay: 0.5s;
        cursor: pointer;
    }
    .contenedor-servicios {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        width: 70%;
        margin: auto;
        border-radius: 50px;
        margin-top: 50px;
        line-height: 30px;
    }
    .contenedor-servicios:hover {
        background-image: radial-gradient( circle 987px at 99% 2%,  rgba(22,183,229,1) 0%, rgba(9,54,103,1) 90% );
        color: white;
        
    }
    .contenedor-diploma {
        width: 95%;
        margin: auto;
    }
    .img-diploma:hover {
        transform: scale(1.2);
    }
    .tarjetas-cursos-y-diplomas {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        width: 80%;
        margin: auto;
    }
    .contenedor-tarjeta {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
        margin-bottom: 30px;
    }
    .titulo-diplomados {
        padding: 10px;
        text-align: center;
    }
    .titulo-diplomados:hover {
        background-image: linear-gradient( 109.6deg,  rgba(245,56,56,1) 11.2%, rgba(234,192,117,1) 78% );
    }
}
</style>