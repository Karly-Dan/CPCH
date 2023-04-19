<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div class="contenido-valores">
      <div class="mision">
        <div class="texto-mision">
          <h1>Misión</h1>
          <p>Ofrecer servicios de capacitación, evaluación y certificación de competencias para el trabajo en diversas especialidades, de acuerdo a las necesidades del sector productivo y público en general.</p>
        </div>
        <div>
          <img src="../assets/img-nosotros.jpg" alt="" class="imagen-mision">
        </div>
      </div>
      <div class="vision">
        <div class="texto-vision">
        <h1>Visión</h1>
        <p>Ser un Centro de Formación para el trabajo que brinde servicios de calidad a nivel regional, nacional e internacional, utilizando diferentes metodologías para un aprendizaje significativo, 
        contribuyendo al fortalecimiento y productividad de las organizaciones y de las personas, siendo reconocidos por nuestra excelencia.</p>
        </div>
        <div>
          <img src="../assets/img-vision.jpg" alt="" class="imagen-vision">
        </div>
      </div>
      <div class="objetivo">
        <div class="texto-objetivo"> 
          <h1>Objetivo</h1>
          <p>Crear una nueva cultura de productividad y calidad a través de la capacitación y certificación de la fuerza laboral, buscando incrementar las oportunidades de acceso a los espacios de preparación 
          para el trabajo y aspirar con esto, a un desempeño laboral de calidad, fortaleciendo su competitividad profesional</p>
        </div>
        <div>
          <img src="../assets/img-objetivo.jpg" alt="" class="imagen-objetivo">
        </div>
      </div>
      <div class="valores">
        <div class="texto-valores">
          <h1>Valores</h1>
          <li>Responsabilidad</li>
          <li>Compromiso</li>
          <li>Honestidad</li>
          <li>Trabajo en equipo</li>
          <li>Respeto</li>
        </div>
        <div>
          <img src="../assets/img-valores.jpg" alt="" class="imagen-valores">
        </div>
      </div>
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
          <img src="../assets/img-empresa.jpg" alt="" class="imagen-empresa">
        </div>
      </div>
      <div class="beneficios-empleados">
        <div class="texto-empleados">
          <h1>Beneficios para los empleados</h1>
          <li style="line-height: 30px;">Reconocimiento a través de un documento de legalidad nacional y/o internacional, que respalda sus competencias laborales.</li>
          <li style="line-height: 30px;">Aumento de la posibilidad de encontrar empleo mejor remunerado.</li>
          <li style="line-height: 30px;">Disminución de actos inseguros en el trabajo.</li>
          <li style="line-height: 30px;">Incremento de su motivación y desempeño laboral.</li>
        </div>
        <div class="contenedor-empleados">
          <img src="../assets/img-empleados.jpg" alt="" class="imagen-empleados">
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
h1 {
  color: #4b4749;
  font-size: 50px;
}
@media (max-width: 776px) {
  .imagen-mision, .imagen-vision, .imagen-valores, .imagen-objetivo, .imagen-empresa, .imagen-empleados {
    height: 200px;
  }
  .imagen-mision, .imagen-empresa {
    border-radius: 25% 10%;
  }
  .imagen-vision, .imagen-empleados {
    border-radius: 10% 30% 50% 70%;
  }
  .imagen-objetivo {
    border-radius: 10px 100px / 120px;
  }
  .imagen-valores {
    border-radius: 50% 20% / 10% 40%;
  }
  .contenido-valores {
    width: 85%;
    margin: auto;
  }
  .mision, .vision, .objetivo, .valores {
    line-height: 30px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .imagen-mision, .imagen-vision, .imagen-valores, .imagen-objetivo {
    height: 250px;
  }
  .imagen-empresa {
    height: 400px;
  }
  .contenedor-empresa {
    text-align: center;
  }
  .imagen-mision, .imagen-empresa {
    border-radius: 25% 10%;
    padding-top: 20px;
  }
  .imagen-vision, .imagen-empleados {
    border-radius: 10% 30% 50% 70%;
    padding-top: 25px;
  }
  .imagen-objetivo {
    border-radius: 10px 100px / 120px;
  }
  .imagen-valores {
    border-radius: 50% 20% / 10% 40%;
  }
  .contenido-valores {
    padding: 35px;
  }
  .mision, .vision, .objetivo, .valores {
    line-height: 30px;
  }
  .mision {
    display: flex;
    margin-bottom: 100px;
  }
  .texto-mision {
    padding-right: 10px;
  }
  .vision {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 100px;
  }
  .texto-vision {
    padding-left: 20px;
  }
  .objetivo {
    display: flex;
    margin-bottom: 100px;
  }
  .texto-objetivo {
    padding-right: 15px;
  }
  .valores {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
  .texto-valores {
    margin-right: 20px;
  }
  .imagen-empleados {
    height: 350px;
  }
  .contenedor-empleados {
    text-align: center;
  }
  .beneficios-empresa {
    margin-bottom: 100px;
  }
}
@media (min-width: 1024px) {
  .imagen-mision, .imagen-vision, .imagen-valores, .imagen-objetivo {
    height: 350px;
  }
  .imagen-empresa {
    height: 450px;
  }
  .contenedor-empresa {
    text-align: center;
  }
  .imagen-mision, .imagen-empresa {
    border-radius: 25% 10%;
    padding-top: 20px;
  }
  .imagen-vision, .imagen-empleados {
    border-radius: 10% 30% 50% 70%;
    padding-top: 25px;
  }
  .imagen-objetivo {
    border-radius: 10px 100px / 120px;
  }
  .imagen-valores {
    border-radius: 50% 20% / 10% 40%;
  }
  .contenido-valores {
    padding: 75px;
  }
  .mision, .vision, .objetivo, .valores {
    line-height: 30px;
  }
  .mision {
    display: flex;
    margin-bottom: 100px;
  }
  .texto-mision {
    padding-right: 20px;
  }
  .vision {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 100px;
  }
  .texto-vision {
    padding-left: 20px;
  }
  .objetivo {
    display: flex;
    margin-bottom: 100px;
  }
  .texto-objetivo {
    padding-right: 15px;
  }
  .valores {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }
  .texto-valores {
    margin-right: 20px;
  }
  .imagen-empleados {
    height: 400px;
  }
  .contenedor-empleados {
    text-align: center;
  }
  .beneficios-empresa {
    margin-bottom: 100px;
  }
}


</style>