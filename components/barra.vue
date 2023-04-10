<template>
  <div class="contenedor-barra">
    <a class="contenido-barra" href="/">Inicio</a>
    <a class="contenido-barra" href="/acercaDeNosotros">Acerca de nosotros</a>
    <a class="contenido-barra" href="/contacto">Contacto</a>
    <a class="contenido-barra" href="/misionVision">Misión y Visión</a>
    <a class="contenido-servicio" href="/servicios">Servicios</a>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.contenedor-barra a:hover {
    color: #df612a;
}

.contenedor-barra a:active {
    color: red;
}

.contenedor-barra {
    background-color: #021373;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.contenido-barra {
    color: white;
    text-decoration: none;
    padding-right: 25px;
    border-left: 2px solid white;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.contenido-servicio {
  color: white;
  text-decoration: none;
  padding-right: 25px;
  border-left: 2px solid white;
  border-right: 2px solid white;
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
}
@media (max-width: 776px) {
    .contenedor-barra {
        display: none;
    }
}
@media (min-width: 1024px) {
}
</style>