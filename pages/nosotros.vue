<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div class="contenido-valores">
      <div class="mision">
        <div class="texto-mision">
          <img src="../assets/mision(1).png" alt="" class="img-valores">
          <h1 class="titulo">Misión</h1>
        </div>
        <div class="parrafos">
          <p>Ofrecer servicios de capacitación, evaluación y certificación de competencias para el trabajo en diversas especialidades, de acuerdo a las necesidades del sector productivo y público en general.</p>
        </div>
      </div>

      <div class="vision">
        <div class="texto-vision">
        <img src="../assets/objetivo.png" alt="" class="img-valores">
        <h1 class="titulo">Visión</h1>
        </div>
        <div class="parrafos">
          <p>Ser un Centro de Formación para el trabajo que brinde servicios de calidad a nivel regional, nacional e internacional, utilizando diferentes metodologías para un aprendizaje significativo, 
          contribuyendo al fortalecimiento y productividad de las organizaciones y de las personas, siendo reconocidos por nuestra excelencia.</p>
        </div>
      </div>

      <div class="valores">
        <div class="texto-valores">
          <img src="../assets/valor.png" alt="" class="img-valores">
          <h1 class="titulo">Valores</h1>
        </div>
        <div class="parrafos">
          <li>Responsabilidad</li>
          <li>Compromiso</li>
          <li>Honestidad</li>
          <li>Trabajo en equipo</li>
          <li>Respeto</li>
        </div>
      </div>
      </div>

    
      <div class="objetivo">
        <div class="texto-objetivo"> 
          <h1>Objetivo</h1>
          <p>Crear una nueva cultura de productividad y calidad a través de la capacitación y certificación de la fuerza laboral, buscando incrementar las oportunidades de acceso a los espacios de preparación 
          para el trabajo y aspirar con esto, a un desempeño laboral de calidad, fortaleciendo su competitividad profesional</p>
        </div>
        <div>
          <img src="../assets/bombilla.png" alt="" class="imagen-objetivo">
        </div>
      </div>

      <div class="contenedor-beneficios">
      <div class="beneficios-empresa">
        <div class="texto-empresa">
          <h1>Beneficios para las empresas</h1>
          <li style="line-height: 30px;">Ser más productiva y competitiva.</li>
          <li style="line-height: 30px;">Tener mayores oportunidades de crecimiento y desarrollo nacional e internacional.</li>
          <li style="line-height: 30px;">Generar más y mejores empleos.</li>
          <li style="line-height: 30px;">Utilizar de mejor manera la maquinaria y el equipo.</li>
          <li style="line-height: 30px;">Disminuir los riesgos de trabajo.</li>
          <li style="line-height: 30px;">Contar con personal especializado.</li>
          <li style="line-height: 30px;">Aumentar los niveles de eficiencia y eficacia.</li>
          <li style="line-height: 30px;">Reducir los costos de producción y de operación.</li>
        </div>
        <div class="contenedor-empresa">
          <img src="" alt="" class="imagen-empresa">
        </div>
      </div>
      <div class="beneficios-empleados">
        <div class="texto-empleados">
          <h1>Beneficios para los empleados</h1>
          <li style="line-height: 30px;">Reconocimiento a través de un documento de legalidad nacional y/o internacional, que respalda sus competencias laborales.</li>
          <li style="line-height: 30px;">Aumento de la posibilidad de encontrar empleo mejor remunerado.</li>
          <li style="line-height: 30px;">Disminución de riesgos de trabajo</li>
          <li style="line-height: 30px;">Incremento de motivación y desempeño laboral.</li>
        </div>
        <div class="contenedor-empleados">
          <img src="" alt="" class="imagen-empleados">
        </div>
      </div>
      </div>
    <footer-vue/>
  </main>
</template>

<script>
import footerVue from '../components/footer.vue'
import headerVue from '../components/header.vue'
import barraVue from '../components/barra.vue'

export default {
    components: {
        headerVue,
        footerVue,
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
.mision, .vision, .objetivo, .valores {
  line-height: 30px;
}
.objetivo {
  background-image: radial-gradient( circle 993px at 0.5% 50.5%,  rgba(137,171,245,0.37) 0%, rgba(245,247,252,1) 100.2% );
  padding: 20px;
}
@media (max-width: 776px) {
  .contenido-valores {
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
  }
  .texto-mision, .texto-vision, .texto-valores {
    display: block ruby;
    padding: 20px;
    border-bottom: 2px solid #85aeee;

  }
  .titulo {
    margin: 0;
    letter-spacing: -0.03em;
    font-size: 24px;
  }
  .parrafos {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    color: #7e8aa7;
  }
  .objetivo {
    width: 85%;
    margin: auto;
    border-radius: 55px;
    color: #7e8aa7;
    margin-bottom: 50px;
  }
  .imagen-objetivo {
    text-align: center;
  }
  .contenedor-beneficios {
    width: 85%;
    margin: auto;
  }
  .beneficios-empresa {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 25px;
    color: #5f5f5f;
    margin-bottom: 50px;
  }
  .beneficios-empleados {
    padding: 28px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #5f5f5f;
    margin-bottom: 50px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .contenido-valores {
    width: 70%;
    margin: auto;
    margin-bottom: 50px;
  }
  .texto-mision, .texto-vision, .texto-valores {
    display: block ruby;
    padding: 20px;
    border-bottom: 2px solid #85aeee;
  }
  .titulo {
    margin: 0;
    letter-spacing: -0.03em;
    font-size: 24px;
  }
  .parrafos {
    font-size: 14px;
    color: #7e8aa7;
  }
  .objetivo {
      width: 80%;
      margin: auto;
      border-radius: 50px;
      display: flex;
  }
  .texto-objetivo {
    color: #5f5f5f;
  }
  .contenedor-beneficios {
    padding: 45px;
  }
  .beneficios-empresa {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 25px;
    color: #5f5f5f;
    margin-bottom: 50px;
  }
  .beneficios-empleados {
    padding: 28px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #5f5f5f;
  }

}
@media (min-width: 1024px) {
  .contenido-valores {
    display: flex;
    width: 80%;
    margin: auto;
  }
  .texto-mision, .texto-vision, .texto-valores {
    display: block ruby;
    padding: 20px;
  }
  .titulo {
    margin: 0;
    letter-spacing: -0.03em;
    font-size: 24px;
  }
  .parrafos {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 14px;
    color: #7e8aa7;
  }
  .texto-mision:hover {
    transform: scale(1.1);
  }
  .texto-vision:hover {
    transform: scale(1.1);
  }
  .texto-valores:hover {
    transform: scale(1.1);
  }
  .valores {
    width: inherit;
  }
  .objetivo {
    width: 90%;
    margin: auto;
    border-radius: 50px;
    display: flex;
    color: #5f5f5f;
  }
  .objetivo:hover {
    transform: scale(0.9);
    cursor: pointer;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(7,121,222,1) 0%, rgba(20,72,140,1) 90% );
    color: white;
  }
  .texto-objetivo:hover {
    color: white;
  }
  .contenedor-beneficios {
    display: flex;
    padding: 60px;
  }
  .beneficios-empresa {
    width: -moz-available;
    margin-right: 78px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 25px;
    color: #5f5f5f;
  }
  .beneficios-empleados {
    padding: 28px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #5f5f5f;
  }
  .beneficios-empleados:hover {
    transform: scale(1.1);
  }
  .beneficios-empresa:hover {
    transform: scale(1.1);
  }
}


</style>