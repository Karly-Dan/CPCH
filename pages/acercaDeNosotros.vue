<template>
  <main>
    <header-vue/>
    <div>
      <div class="titulo-nosotros">
        <h1>Acerca de Nosotros</h1>
      </div>
      <div class="texto-nosotros">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam culpa laudantium, qui aut hic minus natus iure unde delectus optio veniam dignissimos esse sunt saepe repellendus eum quidem distinctio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi culpa consequuntur impedit mollitia laudantium quas vitae voluptas tenetur animi molestiae voluptate, distinctio saepe dolores porro facilis, iste, doloribus est modi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis velit vel eligendi quasi ab molestiae architecto nemo aut eveniet ducimus, voluptas quidem numquam officiis sequi possimus praesentium quos adipisci fuga. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate culpa nesciunt obcaecati maxime quibusdam labore odio sapiente adipisci distinctio deleniti veniam tenetur, quod a atque dolorum iure cupiditate debitis commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum rem esse quam, laborum nemo neque. Officia animi ea totam laudantium sint perspiciatis sequi repudiandae, eaque, nobis iste ratione aliquid cumque?</p>
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
@media (min-width: 1024px) {
  .texto-nosotros {
    width: 80%;
    margin: auto;
  }
}
</style>