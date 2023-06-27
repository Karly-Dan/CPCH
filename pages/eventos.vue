<template>
  <main>        
    <header-vue/>
    <barra-vue />
    <div class="contenedor-blog">
      <h1 class="titulo">Nuestros Eventos </h1>

      <div class="contenido-blog">
        <div class="contenedor-img">
          <img src="../assets/liderazgo.jpg" alt="" class="imagen-blog">
        </div>
        <div class="contenedor-inf-blog">
          <h1 class="titulo-blog">Reunión con empresarios.</h1>
          <p class="subtitulo-blog">Uno de nuestros instructores impartiendo curso de Liderazgo con PNL, para empresas.</p>
          <p class="usuario">Centro de Profesionalización de Capital Humano</p>
        </div>
      </div>

      <div class="contenedor-carrusel">
        <VueSlickCarousel :arrows="false" :dots="true" autoplay style="text-align: center;">
        <img src="../assets/carrusel2.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/carrusel3.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/carrusel4.jpg" alt="imagen" class="imagen-carrusel">
        <img src="../assets/carrusel5.jpg" alt="imagen" class="imagen-carrusel">
        </VueSlickCarousel>
      </div>
      <div class="blog-grupos">
        <div class="blog">
          <div>
            <h1 class="titulo-blog">Levantamiento de DNC empresa Vela Feliz</h1>
            <p class="subtitulo-blog">Entrevista con personal de VELA FELIZ, con la finalidad de identificar áreas de oportunidad para capacitación.</p>
            <p class="usuario">Centro de Profesionalización de Capital Humano</p>
          </div>
        </div>     
      </div>

    </div>
    <footer-vue/>
  </main>
  
</template>

<script>
import headerVue from '../components/header.vue'
import footerVue from '../components/footer.vue'
import barraVue from '../components/barra.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    components: {
        headerVue,
        footerVue,
        barraVue,
        VueSlickCarousel,
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
.titulo {
  text-align: center;
  color: #373635;
}
.titulo-blog {
  color: #424140;
}
.subtitulo-blog {
  color: rgba(0,0,0,.54) !important;
  fill: rgba(0,0,0,.54) !important;

}
.usuario {
  color: #021373;
  font-weight: bold;
}
@media (max-width: 776px) {
  .imagen-blog {
    height: 237px;
  }
  .imagen-blog2 {
    height: 185px;
  }
  .contenedor-blog {
    width: 95%;
    margin: auto;
  }
  .contenedor-img {
    text-align: center;
  }
  .titulo-blog {
    text-align: center;
  }
  .subtitulo-blog {
    text-align: center;
  }
  .imagen-carrusel {
    width: auto;
    object-fit: scale-down;
    height: 150px;
  }

}
@media (min-width: 768px) and (max-width: 1023px) {
  .imagen-blog {
    height: 260px;
  }
  .imagen-blog2 {
    height: 185px;
  }
  .contenedor-blog {
    width: 90%;
    margin: auto;
  }
  .contenido-blog {
    display: flex;
    margin-bottom: 25px;

  }
  .titulo-blog {
    font-size: 20px;
  }
  .contenedor-inf-blog {
  padding: 20px;
  }
  .imagen-carrusel {
    width: auto;
    object-fit: scale-down;
    height: 250px;
  }
  .blog-grupos {
  text-align: center;
}

}
@media (min-width: 1024px) {
  .imagen-blog {
  height: 370px;
}
.imagen-blog2 {
  height: 215px;
}
.contenido-blog {
  display: flex;
  margin-bottom: 25px;
}
.contenedor-blog {
  width: 80%;
  margin: auto;
}
.blog-grupos {
  text-align: center;
}
.titulo-blog {
  font-size: 25px;
  color: #424140;
}
.subtitulo-blog {
  font-size: 17px;

}
.contenedor-inf-blog {
  padding: 30px;
}
.usuario {
  color: #021373;
  font-size: 16px;
  font-weight: bold;
}
.imagen-carrusel {
    width: auto;
    object-fit: scale-down;
    height: 300px;
  }
}
</style>