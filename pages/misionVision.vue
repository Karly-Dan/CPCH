<template>
  <main>
    <header-vue/>
    <div class="contenido-valores">
      <div class="informacion">
        <h1>Vision</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quis, explicabo corrupti omnis enim blanditiis quidem et non! Vero corporis cum numquam voluptatibus, debitis distinctio magnam aliquam nesciunt voluptas aut.</p>
      </div>
      <div class="informacion">
        <h1>Mision</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt error voluptate aliquam, cupiditate voluptates temporibus corporis obcaecati porro eligendi, dolore quam voluptas exercitationem nobis consectetur neque ipsa dolor? Officia, cumque?</p>
      </div>
      <div class="informacion">
        <h1>Valores</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolores sit cumque, sed pariatur nihil repellat eligendi facere quas deserunt dolor, ratione voluptas accusantium excepturi veniam placeat, voluptate animi provident?</p>
      </div>
    </div>
    <footer-vue/>
  </main>
</template>

<script>
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'

export default {
    components: {
        headerVue,
        footerVue,
    }
}
</script>

<style>
body {
    margin: 0;
}
.contenido-valores {
  text-align: justify;
  width: 95%;
  margin: auto;
  margin-bottom: 99px;
}

@media (min-width: 1024px) {
  .contenido-valores {
    display: flex;
    height: 300px;
  }
  .informacion {
    padding: 10px;
  }
}
</style>