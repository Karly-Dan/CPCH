<template>
  <div class="contenedor-cursos">
    <img class="imagen-cursos" src="../assets/cursos.jpg" alt="imagen">
    <h1 class="texto-tarjeta">{{ titulo }}</h1>
    <button-a
    nombre="!Ver mas¡" 
    class="button-tarjeta"
    href="https://eco2017.cpcapitalhumano.com.mx/"
    />
  </div>
</template>

<script>
import buttonVue from './button.vue'
import ButtonA from './buttonA.vue'

export default {
    props: {
        titulo: {
            type: String,
            default: '',
        }
    },
    components: {
        buttonVue,
        ButtonA,
    }
}
</script>

<style>
.contenedor-cursos {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    width: 26%;
}
.texto-tarjeta {
    text-align: center;
}
.button-tarjeta {
    width: 190px;
}
.imagen-cursos {
    width: 100%;
}


@media (max-width: 776px) {
    .contenedor-cursos {
        width: 86%;
        margin: auto;
        margin-bottom: 25px;

    }
}
@media (min-width: 1024px) {
    .button-tarjeta {
        margin-top: 30px;
    }
}
</style>