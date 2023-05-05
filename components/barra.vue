<template>
  <div class="contenedor-barra">
    <a class="contenido-barra" href="/">Inicio</a>
    <a class="contenido-barra" href="/nosotros">Nosotros</a>
    <a class="contenido-barra" href="/servicios">Servicios</a>
    <a class="contenido-barra-clientes" href="/clientes">Nuestros Clientes</a>
    <a class="contenido-servicio" href="/contacto">Contacto</a>
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
.contenido-barra-clientes {
  display: none;
}
@media (max-width: 776px) {
    .contenedor-barra {
        display: none;
    }
}
@media (min-width: 1024px) {
}
</style>