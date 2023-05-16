<template>
    <main>
        <header-vue/>
        <barra-vue />
        <div style="height: 100vh;">
        <div class="contenedor-microsoft"> 
            <div class="contenido-curso-micosoft">
            <h1>CERTIFICACIONES MICROSOFT</h1>
            <p>Este curso nos va a permitir demostrar nuestros conocimientos y habilidades con el uso de las tecnologías de Microsoft. </p>
            <div class="contenedor-img-certificacion">
                <img src="../assets/calidad.png" alt="" class="imagen-certificacion">
            </div>
            </div>
            <cursos-vue
            imagen="microsoft"
            titulo="Microsoft Excel"
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
@media (max-width: 776px) {
    .contenedor-microsoft {
        margin: auto;
        padding: 14px;
        justify-content: space-evenly;
        border-radius: 50px;
        background-image: linear-gradient(109.6deg,#dfeaf7 11.2%,#f4f8fc 91.1%);
        width: 85%;
        margin: auto;
    }
    .imagen-certificacion {
        display: block;
        margin: auto;
        margin-bottom: 20px;
    }
}
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-microsoft {
        display: flex;
        margin: auto;
        padding: 20px;
        background-image: linear-gradient( 109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% );
        justify-content: space-evenly;
        width: 90%;
        border-radius: 50px;
    }
    .contenido-curso-micosoft {
        width: 45%;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }

}

@media (min-width: 1024px) {
    .contenedor-cursos {
        width: 23%;
        margin-right: 50px;
        margin-bottom: 40px;
        margin-top: 20px;
    }
    .contenido-curso-micosoft {
        width: 45%;
        letter-spacing: 0.2rem;
        color: #5f5f5f;
        line-height: 30px;
    }
    .contenedor-microsoft {
        display: flex;
        margin: auto;
        padding: 20px;
        background-image: linear-gradient( 109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1% );
        justify-content: space-evenly;
        width: 95%;
        border-radius: 50px;
        margin-bottom: 30px;
    }
    .contenedor-img-certificacion:hover .imagen-certificacion{
        transform: translateX(500px);
    }
    .imagen-certificacion {
        transition: transform 1s ease;
        transition-delay: 0.5s;
        cursor: pointer;
    }
}
</style>