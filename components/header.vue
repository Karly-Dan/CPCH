<template>
  <header>
    <div class="contenedor-header">
        <div class="div-czya">
          <h1 class="titulo-cpch1">CENTRO DE PROFESIONALIZACIÓN DE CAPITAL HUMANO</h1>
        </div>
        <nav class="contenedor-menu">
            <input type="checkbox" id="menu" class="input-menu">
            <label class="label-menu" for="menu"> <img src="../assets/menu.png" alt=""  class="menu-lista" style="filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);"> </label>
            <ul>
              <a href="/" class="list">Inicio</a>
              <a href="/nosotros" class="list">Acerca de nosotros</a>
              <a href="/servicios" class="list">Servicios</a>
              <a href="/contacto" class="list">Contacto</a>
              <a href="/microsoft" class="list">Microsoft</a>
              <a href="cursosYdiplomados" class="list">Cursos y Diplomados</a>
              <a href="/clientes" class="list2">Nuestros Clientes</a>
              <a href="/eventos" class="list">Eventos</a>
            </ul>
        </nav>
    </div>
    <div class="contenedor-titulo-tablet">
      <h1 class="titulo-tablet">CENTRO DE PROFESIONALIZACIÓN DE CAPITAL HUMANO</h1>
    </div>
    <div class="contenedor">
        <div class="div-cpch">
            <img src="../assets/logoCPCH.jpg" alt="" class="logo-capitalhumano">
        </div>
        <div>
            <h1 class="titulo-cpch">CENTRO DE PROFESIONALIZACIÓN DE CAPITAL HUMANO</h1>
            <img src="../assets/logoCZYA.png" alt="" class="logo-c">
        </div>
        <div class="div-redconocer">
            <img src="../assets/logoRC.jpg" alt="" class="logo-red">
        </div>
    </div>
  </header>
</template>

<script>
</script>

<style>
.contenedor-header {
    background-color: #021373;
    display: flex;
    justify-content: space-between;
}
.list {
  color: white;
  text-decoration: none;
}
.contenedor-menu {
  margin-bottom: 10px;
}
.div-cpch {
    background-color: white;
}
.imagen-menu {
    cursor: pointer;
    filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);
}
.lista-menu {
    background-color: #021373;
    position: absolute;
}
.menu-lista {
  padding-top: 8px;
}
.list-menu {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}
ul{
  display: none;
}
input:checked  ~ ul{
  display: grid;
  margin-top: 32px;
  justify-content: end;
  text-align: center;
}
.input-menu {
  display: none;
}
.label-menu {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  user-select: none;
  float: right;
  padding-right: 40px;
}
ul{
  margin-top:0;
  padding: 0;
  width: 200px;
}
.list {
  display: block;
  background: #021373;
  margin: 0;
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid white;
  color: white;
  float: inline-end;
}
.list:hover {
  filter: brightness(110%);
}
@media (max-width: 776px) {
  .contenedor {
    display: flex;
    justify-content: space-evenly;
  }
  .titulo-cpch {
    text-align: center;
    font-size: 12px;
    display: none;
  }
  .list2 {
    display: none;
  }
  .titulo-cpch1 {
    color: white;
    font-size: 15px;
    text-align: center;
    padding: 1px;
  }
  .logo-c {
    height: 70px;
    display: none;
  }
  .contenedor {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  margin-bottom: 20px;
  padding: 10px;
  }
  .logo-conde {
    display: none;
  }
  .logo-red {
      height: 74px;
  }
  .logo-capitalhumano {
  height: 80px;  
  }
  .contenedor-titulo-tablet {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .contenedor {
        display: flex;
        justify-content: center;
        padding: 5px;
    }
    .logo-capitalhumano {
      height: 95px;
    }
    .logo-red {
      height: 110px;
    }
    .titulo-cpch {
      text-align: center;
      display: none;
    }
    .logo-conde {
      display: none;
    }
    .contenedor-header {
      display: none;
    } 
    .logo-c {
      height: 95px;
    }
    .contenedor-titulo-tablet {
      margin: 0;
      text-align: center;
      background-color: #021373;
      color: white;
      padding: 1px;
    }
    .titulo-tablet {
      font-size: 20px;
      color: white;
    }
    .list2 {
      display: none;
    }
    
}

@media (min-width: 1024px) {
    .contenedor {
    display: flex;
    justify-content: space-evenly;
    }
    .titulo-cpch {
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    }
    .contenedor-menu {
    display: none;
    }
    .contenedor-header {
      display: none;
    }
    .logo-conde {
      width: 176px;
      padding: 15px;
    }
    .logo-red {
      height: 115px;
    }
    .logo-capitalhumano {
      padding: 4px;
      height: 115px;
    }
    .logo-c {
      display: none;
    }
    .contenedor-titulo-tablet {
      display: none;
    }
    .list2 {
      display: none;
    }
}
</style>