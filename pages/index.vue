<template>
  <main>
    <header-vue />
    <barra-vue />

    <div>
        <VueSlickCarousel :arrows="false" :dots="true" autoplay style="text-align: center;">
        <img src="../assets/pruebaimg2.jpg" alt="imagen" class="imagen-principal">
        <img src="../assets/pruebaimg3.jpg" alt="imagen" class="imagen-principal">
        <img src="../assets/pruebaimg4.jpg" alt="imagen" class="imagen-principal">
        <img src="../assets/pruebaimg5.jpg" alt="imagen" class="imagen-principal">
        </VueSlickCarousel>
    </div>

    <div class="contenedor-informativo">
        <div class="texto-informativo">
            <h1 class="titulo-informativo">EC0217.01 Impartición de cursos de formación del capital humano de manera presencial grupal</h1>
            <p class="descripcion-del-texto">Descripción del Estándar de Competencia:
                El estándar de competencia impartición de cursos de formación del capital humano de manera presencial y grupal contempla las funciones sustantivas de preparar, conducir y evaluar cursos de capacitación. Preparar la sesión mediante la planeación de la sesión y la comprobación de la existencia y el funcionamiento de los recursos requeridos para la sesión. Conducir la sesión realizando el encuadre, desarrollo y cierre, empleando técnicas instruccionales y grupales que faciliten el proceso de aprendizaje. Evaluar el aprendizaje antes, durante y al final del curso, considerando la satisfacción de los participantes/capacitandos.
                <br>
                <br>
                El presente EC se fundamenta en criterios rectores de legalidad, competitividad, libre acceso, respeto, trabajo digno y responsabilidad social.
                <br>
                <br>
                El presente EC actualiza al EC0217 “Impartición de cursos de formación del capital humano de manera presencial grupal”, publicado en el Diario Oficial de la Federación el 6 de julio de 2012.
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
    .imagen-principal {
        width: auto;
        object-fit: scale-down;
        height: 300px;
    }
    .descripcion-del-texto {
        padding-right: 45px;
    }
}
</style>