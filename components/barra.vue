<template>
<main>
  <div class="contenedor-barra">
    <a href="/" class="contenido-barra">Inicio</a>
    <a href="/nosotros" class="contenido-barra">Nosotros</a> 

    <div class="subnav">
      <a  class="contenido-barra">Servicios <img src="../assets/flecha-abajo.png" alt="" class="flecha-abajo"> </a>
      <div class="mas">
        <a href="/microsoft" class="submenu">Microsoft</a>
        <a href="/cursosYdiplomados" class="submenu">Cursos y Diplomados</a>
        <a href="/servicios" class="submenu">Certificaciones Conocer</a>
      </div>
    </div> 
      <a class="contenido-barra-clientes" href="/clientes">Nuestros Clientes</a>
      <a href="/contacto" class="contenido-barra">Contacto</a>
      <a href="/eventos" class="contenido-barra">Eventos</a>
 </div>
</main>
</template>

<script>
export default {
}
</script>

<style>
.mas {
  display: none;
  position: absolute;
  background-color: #df612a;
  width: 100%;
  left: 0;
  text-align: center;
  color: white;
}
.flecha-abajo {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(99%) contrast(107%);
  margin-left: 5px;
  height: 10px;
  margin-top: 5px;
}
.subnav:hover > .mas {
  display: block; 
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
}
.submenu:hover {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.submenu {
  padding-right: 30px;
  text-decoration: none;
  color: white;
}
.contenedor-barra a:hover {
    font-weight: bold;
}
.contenedor-barra {
    background-color: #021373;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.contenido-barra {
    color: white;
    text-decoration: none;
    padding-right: 25px;
    border-left: 2px solid white;
    padding-left: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
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
@media (min-width: 768px) and (max-width: 1023px) {
}
@media (min-width: 1024px) {
  .submenu {
    padding-right: 35px;
  }
}
</style>

