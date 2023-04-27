<template>
  <div class="contenedor-cursos">
    <img class="imagen-cursos" :src="require(`/assets/${imagen}.jpeg`)" alt="imagen">
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
        imagen: {
            type: String,
            default: '',
        },
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
}
.texto-tarjeta {
    text-align: center;
    font-size: 17px;
    padding: 10px;
    color: #5f5f5f;
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
@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor-cursos {
        width: 28%;
        margin-right: 20px;
    }
    .imagen-cursos {
        height: 231px;
        width: 100%;
    }
}
@media (min-width: 1024px) {
    .button-tarjeta {
        margin-top: 30px;
    }
    .contenedor-cursos {
        width: 26%;
    }
    .contenedor-cursos:hover {
        transform: scale(1.1);
    }
    .imagen-cursos {
        height: 230px;
    }
}
</style>