<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div style="width: 85%; margin: auto;">
      <div class="titulo-nosotros">
        <h1>Algunos de Nuestros Clientes</h1>
      </div>
      <div class="texto-nosotros">
        <li>Cave Soluciones, S.A. de C.V.</li>
        <li>MXV Grupo Inmobiliario SAPI de C.V.</li>
        <li>Virtualización y Nuevas Tecnologías, S.A. de C.V.</li>
        <li>MFOntova Asoc., S.C.</li>
        <li>Maquinados Vega</li>
        <li>Grúas Rojas</li>
        <li>Guarderías Cdmx, Hidalgo, Estado de México</li>
      </div>
    </div>
    <footer-vue/>
  </main>
</template>

<script>
import barraVue from '../components/barra.vue'
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'

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
.titulo-nosotros {
  text-align: center;
}
.texto-nosotros {
  text-align: justify;
  height: 466px;
}
@media (max-width: 776px) {
  .texto-nosotros {
    width: 95%;
    margin: auto;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .texto-nosotros {
    width: 95%;
    text-align: justify;
    margin: auto;
  }
}
@media (min-width: 1024px) {
  .texto-nosotros {
    width: 80%;
    margin: auto;
  }
  
}
</style>