<template>
  <main>        
    <header-vue/>
    <barra-vue />
    <div class="contenedor-blog">
      <h1 class="titulo">Nuestros Eventos </h1>

      <div class="contenido-blog">
        <div class="contenedor-img">
          <img src="../assets/img-valores.jpg" alt="" class="imagen-blog">
        </div>
        <div class="contenedor-inf-blog">
          <h1 class="titulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
          <p class="subtitulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt magni odit eveniet vel veritatis nesciunt similique autem aperiam minima. Quos, perspiciatis quidem incidunt ipsa tenetur quisquam vero saepe commodi.</p>
          <p class="usuario">Centro de Profesionalización de Capital Humano</p>
        </div>
      </div>

      <div class="blog-grupos">
        <div class="blog">
          <div class="contenedor-img">
            <img src="../assets/img-valores.jpg" alt="" class="imagen-blog2">
          </div>
          <div>
            <h1 class="titulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p class="subtitulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt magni odit eveniet vel veritatis nesciunt similique autem aperiam minima. Quos, perspiciatis quidem incidunt ipsa tenetur quisquam vero saepe commodi.</p>
            <p class="usuario">Centro de Profesionalización de Capital Humano</p>
          </div>
        </div>

        <div class="blog">
          <div class="contenedor-img">
            <img src="../assets/img-valores.jpg" alt="" class="imagen-blog2">
          </div>
          <div>
            <h1 class="titulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p class="subtitulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt magni odit eveniet vel veritatis nesciunt similique autem aperiam minima. Quos, perspiciatis quidem incidunt ipsa tenetur quisquam vero saepe commodi.</p>
            <p class="usuario">Centro de Profesionalización de Capital Humano</p>
          </div>
        </div>

        <div class="blog">
          <div class="contenedor-img">
            <img src="../assets/img-valores.jpg" alt="" class="imagen-blog2">
          </div>
          <div>
            <h1 class="titulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
            <p class="subtitulo-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt magni odit eveniet vel veritatis nesciunt similique autem aperiam minima. Quos, perspiciatis quidem incidunt ipsa tenetur quisquam vero saepe commodi.</p>
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

export default {
    components: {
        headerVue,
        footerVue,
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
  .blog-grupos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .blog {
    width: 40%;
    margin-right: 50px;
  }
  .contenedor-inf-blog {
  padding: 20px;
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
  display: flex;
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
}
</style>