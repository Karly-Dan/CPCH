<template>
    <main>
        <header-vue/>
        <barra-vue />
        <div>
        <div class="contenedor-microsoft"> 
            <div class="contenido-curso-micosoft">
            <h1>CERTIFICACIONES MICROSOFT</h1>
            <p>Obtener la certificación Microsoft “Office Specialist Certification” en Excel y Word niveles Asociado y Excel Experto.</p>
            <div class="contenedor-img-certificacion">
                <img src="../assets/calidad.png" alt="" class="imagen-certificacion">
            </div>
            </div>
            <cursos-vue
            imagen="microsoft"
            titulo="Microsoft Excel"
            href="https://eco2017.cpcapitalhumano.com.mx/"
            registro="https://eco2017.cpcapitalhumano.com.mx/"
            />
        </div>
        </div>
        <div>
            <div class="logos-microsoft">
                <img src="../assets/icemexico.png" alt="">
                <img src="../assets/Microsoft-Specialist.png" alt="">
            </div>
            <div class="parrafo-microsoft">
                <p>El centro de profesionalización de capital humano en acompañamiento del Instituto de certificación empresarial de México se acredita como centro de certificación en Microsoft, lanzando la campaña denominada Reto Académico.</p>
            </div>
            <div class="tarjeta-contenido">
                <div class="duracion">
                    <p><b>Duración:</b> El proceso de capacitación dura 3 meses ya sea básico o avanzado.</p>
                </div>
                <div>
                    <div class="titulo-contenido">
                        <h1>Contenido</h1>
                    </div>
                    <div class="contenido">
                        <li>100 horas de materiales visuales</li>
                        <li>Sesiones en vivo con especialistas para participantes de Excel Word básico y Excel avanzado con especialistas para preguntas y respuestas.</li>
                        <li>Ejercicios descargables</li>
                        <li>2 Oportunidades para presentar el examen de Certificación</li>
                        <li>Recordatorios para que no se olviden las fechas de sesiones y avances</li>
                        <li>Acompañamiento para migrar de la plataforma de prácticas al simulador de ICEMéxico </li>
                        <li>Evaluación en plataforma Microsoft 2 oportunidades, en caso de no acreditar en la primera la siguiente es 20 días después En ese tiempo se puede seguir practicando para acreditar</li>
                        <li>El certificado de Microsoft se emite inmediatamente después de acreditar el examen.</li>
                        <li>Al tome curso de certificación en Microsoft tienes derecho a obtener el certificado nacional del CONOCER reconocido por la Secretaría de Educación Pública</li>
                        <li>Ya obtenido el certificado tienes acceso a los contenidos por un año, para seguir practicando.</li>
                    </div>
                </div>
            </div>
            <div>
                <div class="entregables">
                    <h1>Entregables</h1>
                    <img src="../assets/ejemploCertificado.jpeg" alt="" class="imagen-microsoft">
                    <img src="../assets/datosMicrosoft.jpeg" alt="">
                </div>
                <div class="proceso">
                    <h1>Proceso</h1>
                    <img src="../assets/ejemplo.png" alt="" class="img-proceso">
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
.parrafo-microsoft {
    margin: auto;
    text-align: center;
    letter-spacing: 0.2rem;
    color: #5f5f5f;
    line-height: 30px;
}
.duracion {
    color: #021373;

}
.titulo-contenido {
    color: #021373;

}
.contenido {
    color: #5f5f5f;
    line-height: 30px;
}
.entregables {
    text-align: center;
    color: #5f5f5f;
    letter-spacing: 0.2rem;
    line-height: 30px;

}
.imagen-microsoft {
    margin-right: 35px;
}
.proceso {
    text-align: center;
    color: #5f5f5f;
    letter-spacing: 0.2rem;
    line-height: 30px;
}
@media (max-width: 776px) {
    .contenedor-microsoft {
        margin: auto;
        padding: 14px;
        justify-content: space-evenly;
        border-radius: 50px;
        background-image: linear-gradient(109.6deg,#dfeaf7 11.2%,#f4f8fc 91.1%);
        width: 85%;
        margin: auto;
    }
    .imagen-certificacion {
        display: block;
        margin: auto;
        margin-bottom: 20px;
    }
    .img-proceso {
        width: -moz-available;
    }
    .imagen-microsoft {
        margin-bottom: 20px;
    }
    .logos-microsoft img{
        height: 100px;
    }
    .logos-microsoft {
        margin: auto;
        text-align: center;
    }
    .tarjeta-contenido {
        width: 79%;
        margin: auto;
        text-align: justify;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 30px;
        margin-bottom: 20px;
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-microsoft {
        display: flex;
        margin: auto;
        padding: 20px;
        background-image: linear-gradient( 109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% );
        justify-content: space-evenly;
        width: 90%;
        border-radius: 50px;
    }
    .contenido-curso-micosoft {
        width: 45%;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }
    .logos-microsoft img{
        height: 145px;
        margin-right: 20px;
    }
    .logos-microsoft {
        margin: auto;
        text-align: center;
    }
    .tarjeta-contenido {
        width: 85%;
        margin: auto;
        text-align: justify;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 30px;
        margin-bottom: 20px;
    }

}

@media (min-width: 1024px) {
    .contenedor-cursos {
        width: 23%;
        margin-right: 50px;
        margin-bottom: 40px;
        margin-top: 20px;
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
        margin-bottom: 30px;
    }
    .contenedor-img-certificacion:hover .imagen-certificacion{
        transform: translateX(500px);
    }
    .imagen-certificacion {
        transition: transform 1s ease;
        transition-delay: 0.5s;
        cursor: pointer;
    }
    .logos-microsoft img{
        height: 145px;
        margin-right: 50px;
    }
    .logos-microsoft {
        margin: auto;
        text-align: center;
    }
    .parrafo-microsoft {
        width: 80%;
        margin: auto;
        text-align: center;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }
    .tarjeta-contenido {
        width: 60%;
        margin: auto;
        text-align: justify;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 30px;
        margin-bottom: 20px;
    }


}
</style>