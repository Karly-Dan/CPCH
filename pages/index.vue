<template>
  <main>
    <header-vue />
    <barra-vue />

    <div class="contenedor-carrusel">
        <VueSlickCarousel :arrows="false" :dots="true" autoplay style="text-align: center;">
        <img src="../assets/imagen-carrusel1.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/imagen-carrusel2.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/imagen-carrusel3.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/imagen-carrusel4.jpg" alt="imagen" class="imagen-carrusel">
        </VueSlickCarousel>
    </div>

    <div class="contenedor-informativo">
        <div class="texto-principal">
            <p style="color: #021373; font-weight: bold;">BIENVENIDOS</p>
            <b style="font-size: 35px; color: #4B4749;"> Al Centro de Capacitación y Profesionalización de Capital Humano.</b><br><br>
             <div class="div-button">
            <button-a-vue
            nombre="Registrate"
            href="https://eco2017.cpcapitalhumano.com.mx/" 
            />
    </div>
        </div>
        <div class="texto-informativo">
            <p class="descripcion-del-texto">
                Somos una organización dedicada a la capacitación, certificación en competencias laborales y Microsoft, bajo estándares de calidad.
                Desarrollando diferentes metodologías de aprendizaje, en diversas áreas del sector productivo, a fin de cubrir las necesidades específicas de especialización del trabajador para el logro de los objetivos de su organización, generando conjuntamente en los empleados un plan de vida y carrera.
                Nuestros instructores cuentan con amplia experiencia en docencia e industria, todos ellos certificados.
                Los programas pueden adecuarse a las necesidades de cada organización. 
            </p>
        </div>
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
  .texto-principal {
        text-align: center;
        margin-top: 40px;
    }
    .descripcion-del-texto {
        line-height: 30px;
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
    .texto-principal {
        text-align: center;
        margin-top: 40px;
    }
    .descripcion-del-texto {
        line-height: 30px;
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
        line-height: 30px;
    }
    .imagen-carrusel {
        width: auto;
        object-fit: scale-down;
        height: 300px;
    }
    .contenedor-informativo {
        display: flex;
        text-align: center;
    }
    .texto-principal {
        padding-top: 30px;
    }
}
</style>