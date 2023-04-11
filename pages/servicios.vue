<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div class="contenedor-curso">
        <div class="titulo-cursos">
            <h1>!Conoce nuestros cursos¡</h1>
        </div>
        <div class="contenedor-tarjetas">
            <cursos-vue
            titulo="ECO217.01 Impartición de cursos de formación del capital humano de manera presencial grupal"
            />
            <cursos-vue
            titulo="ECO154 Prestación de los servicios de limpieza"
            />
            <cursos-vue
            titulo="Microsoft"
            />
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

@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-tarjetas {
        display: flex;
        justify-content: space-around;
    }
}

@media (min-width: 1024px) {
    .contenedor-tarjetas {
        margin: auto;
        display: flex;
        justify-content: space-around;
    }
    .contenedor-curso {
        height: 650px;
    }
    .contenedor-cursos {
        height: 450px;
    }
}
</style>