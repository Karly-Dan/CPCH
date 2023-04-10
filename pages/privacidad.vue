<template>
  <main>
    <header-vue />
    <h1 class="titulo-AP">Aviso de Privacidad</h1>
    <div class="contenedor-AP">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus perferendis quae aut ex! Dolorem consequuntur sunt fugit voluptatem deleniti optio veniam repellat commodi, aperiam similique, nulla deserunt! Architecto, consequuntur quibusdam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quae in voluptatum dolorum, excepturi repellat illum dolorem soluta eaque similique sed incidunt! Doloremque tempore laborum distinctio necessitatibus eveniet nostrum labore?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium culpa aperiam quae atque hic commodi maiores nam necessitatibus molestiae suscipit obcaecati a, blanditiis quidem reprehenderit dolorum et aliquam debitis autem!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis perspiciatis perferendis, vel similique aliquam consequuntur. Voluptas eligendi voluptatem deserunt ipsum reprehenderit accusamus incidunt fugit, expedita, fugiat et sequi id Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam animi quos nobis at cupiditate, beatae exercitationem asperiores in eius et ad ducimus assumenda totam autem perferendis recusandae iste quam quisquam?</p>
    </div>
  </main>
</template>

<script>
import headerVue from '../components/header.vue'


export default {
    components: {
        headerVue,
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
.contenedor-menu {
  display: none;
}
.contenedor {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.titulo-AP {
  text-align: center;
  font-size: 25px;
}
.contenedor-AP {
  width: 95%;
  text-align: justify;
  margin: auto;
}
</style>