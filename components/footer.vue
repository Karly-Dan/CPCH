<template>
  <div class="contenedor-footer">
    <div class="contenido-direccion">
        <p class="direccion">Av. Camino a la presa #6, San Isidro la Paz, Nicolás Romero, Edo. Méx. C.P. 54477</p>
        <p class="numero">55-1254-5494</p>
        <p class="privacidad">Avisos de Privacidad</p>
    </div>
    <div class="redes">
        <a href="https://web.whatsapp.com/"><img src="../assets/whatsapp.png" alt="whats"></a>
        <a href="https://www.facebook.com/"><img src="../assets/facebook(1).png" alt="facebook"></a>
        <a href="https://twitter.com/?lang=es"><img src="../assets/twitter.png" alt="twiter"></a>
        <a href="https://www.instagram.com/"><img src="../assets/instagram.png" alt=""></a>
        <a href="https://www.google.com/?hl=es"><img src="../assets/google-mas.png" alt="google"></a>
        <a href="https://mx.linkedin.com/"><img src="../assets/linkedin.png" alt="linked"></a>
        <a href="https://www.youtube.com/"><img src="../assets/youtube(1).png" alt="youtube"></a>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.contenedor-footer {
    background-color: #021373;
    color: white;
    text-align: center;
    padding-top: 2px;
}
.redes {
  filter: invert(100%) sepia(6%) saturate(7433%) hue-rotate(241deg) brightness(114%) contrast(91%);
  cursor: pointer;
}

@media (min-width: 776px) {
  .contenedor-footer {
    padding-top: 2px;
  }
  .direccion, .privacidad {
    border-right: 2px solid white ;
    border-left: 2px solid white;
    padding-left: 12px;
    padding-right: 12px;
  }
  .numero {
    padding-left: 12px;
    padding-right: 12px;
  }
  .redes {
    padding-bottom: 10px;
  }
  .contenedor-footer {
    margin-top: 66px;
  }
}
</style>