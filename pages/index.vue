<template>
  <main>
    <header-vue />
    <barra-vue />

    <div class="contenedor-carrusel">
        <VueSlickCarousel :arrows="false" :dots="true" autoplay style="text-align: center;">
        <img src="../assets/pruebaimg2.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/pruebaimg3.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/pruebaimg4.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/pruebaimg5.jpg" alt="imagen" class="imagen-carrusel">
        </VueSlickCarousel>
    </div>

    <div class="contenedor-informativo">
        <div class="texto-informativo">
            <h1 class="titulo-informativo">EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal</h1>
            <p class="descripcion-del-texto">
                En el Centro de Capacitación y Profesionalización de Capital Humano, somos una organización dedicada a la capacitación, certificación en competencias laborales y Microsoft, bajo estándares de calidad.
                Desarrollando diferentes metodologías de aprendizaje, en diversas áreas del sector productivo, a fin de cubrir las necesidades específicas de especialización del trabajador para el logro de los objetivos de su organización, generando conjuntamente en los empleados un plan de vida y carrera.
                Nuestros instructores cuentan con amplia experiencia en docencia e industria, todos ellos certificados.
                Los programas pueden adecuarse a las necesidades de cada organización.
            </p>
        </div>
    </div>
    <div class="div-button">
        <button-a-vue
        nombre="Registrate"
        href="https://eco2017.cpcapitalhumano.com.mx/" 
        />
    </div>
    <footer-vue />
  </main>
</template>

<script>
import barraVue from '../components/barra.vue'
import buttonAVue from '../components/buttonA.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    components: {
        barraVue,
        buttonAVue,
        headerVue,
        footerVue,
        VueSlickCarousel,
    },
}
</script>
 
<style>
body {
    margin: 0;
}
main {
    font-family: Arial, Helvetica, sans-serif;
}
.lineas {
    border-radius: 2px;
    height: 2px;
    background-color: black;
}
@media (max-width: 776px) {
  .texto-informativo {
    width: 90%;
    margin: auto;
    text-align: justify;
  }
  .titulo-informativo {
    text-align: initial;
  }
  .imagen-principal {
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-i-p {
        text-align: center;
    }
    .texto-informativo {
        width: 95%;
        text-align: justify;
        margin: auto;
    }
}


@media (min-width: 1024px) {
    .texto-informativo {
        width: 85%;
        margin: auto;
        text-align: justify;
        padding-left: 10px;
    }
    .descripcion-del-texto {
        padding-right: 45px;
    }
    .imagen-carrusel {
        width: auto;
        object-fit: scale-down;
        height: 300px;
    }
}
</style>