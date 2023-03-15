<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div>
      <div class="titulo-contactanos">
        <h1>Contactanos</h1>
      </div>
      <div class="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15032.764453665852!2d-99.2888275!3d19.6191256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2191273ac7405%3A0x9038e4b1068b2df1!2sCentro%20de%20Profesionalizaci%C3%B3n%20de%20Capital%20Humano!5e0!3m2!1ses!2smx!4v1678840128712!5m2!1ses!2smx" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <footer-vue/>
  </main>
</template>

<script>
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
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
.titulo-contactanos {
  text-align: center;
}
.mapa {
  text-align: center;
}
</style>