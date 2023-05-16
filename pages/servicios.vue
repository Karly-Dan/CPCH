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
                <div class="Video">
                    <video src="https://cpch.s3.us-west-1.amazonaws.com/web/videos/conocer.mp4" autoplay controls></video>
                </div>
                <div class="texto-video">
                    <p>
                        Los programas de certificación de competencia laboral son basados con base en los Estándares de Competencia Laboral del Consejo Nacional de Normalización y Certificación CONOCER avalados por la Secretaría de Educación Pública SEP.
                        En los cuales se debe llevar a cabo un proceso de certificación: capacitación, evaluación, emisión del certificado.
                    </p> 
                    <div>
                        <div>
                            <b>Modalidad:</b> Virtual y/o presencial
                        </div>
                        <div class="contenedor-img-virtual">
                            <img src="../assets/video-conferencia.png" alt="" class="imagen-virtual">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="contenedor-tarjetas">
                <cursos-vue
                titulo="EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal"
                imagen="presencial"
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
                titulo="EC0076 Evaluación de la competencia de candidatos con base en Estándares de Competencia"
                imagen="candidatos"
                />
                <cursos-vue
                titulo="EC0154 Prestación de los servicios de limpieza"
                imagen="limpieza"
                />
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
.texto-video {
    text-align: justify;
    line-height: 30px;
    color: #5f5f5f;
}

@media (max-width: 776px) {
    .titulo-diplomados {
        background-color: #021373;
        color: white;
    }
    .titulo-cursos {
        color: #5f5f5f;
    }
    .contenido-cursos {
        width: 95%;
        margin: auto;
    }
    video {
        width: 320px;
    }
    .Video {
        text-align: center;
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
    .texto-video {
        text-align: justify;
        line-height: 30px;
        background-image: radial-gradient( circle 993px at 0.5% 50.5%, rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );
        border-radius: 20px;
        padding: 12px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .contenedor-img-virtual {
        text-align: center;

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
    .Video {
        text-align: center;
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
    .texto-video {
        text-align: justify;
        line-height: 30px;
        background-image: radial-gradient( circle 993px at 0.5% 50.5%, rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );
        border-radius: 20px;
        padding: 12px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .contenedor-img-virtual {
        text-align: center;
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
    .Video {
        padding: 30px;
    }
    .texto-video {
        text-align: end;
        line-height: 30px;
        background-image: radial-gradient( circle 993px at 0.5% 50.5%, rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );
        border-radius: 20px;
        padding: 20px;
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
    .contenedor-img-virtual:hover .imagen-virtual {
        transform: translateX(-300px);
    }
    .imagen-virtual {
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