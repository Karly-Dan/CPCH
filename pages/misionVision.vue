<template>
  <main>
    <header-vue/>
    <barra-vue />
    <div class="contenido-valores">
      <div class="mision">
        <div>
          <h1>Misión</h1>
          <p>Ofrecer servicios de capacitación, evaluación y certificación de competencias para el trabajo en diversas especialidades, de acuerdo a las necesidades del sector productivo y público en general.</p>
        </div>
        <div>
          <img src="../assets/img-nosotros.jpg" alt="" class="imagen-valores">
        </div>
      </div>
      <div class="vision">
        <div>
        <h1 style="margin-left: 10px;">Visión</h1>
        <p>Ser un Centro de Formación para el trabajo que brinde servicios de calidad a nivel regional, nacional e internacional, utilizando diferentes metodologías para un aprendizaje significativo, 
        contribuyendo al fortalecimiento y productividad de las organizaciones y de las personas, siendo reconocidos por nuestra excelencia.</p>
        </div>
        <div>
          <img src="../assets/img-vision.jpg" alt="" class="imagen-valores">
        </div>
      </div>
      <div class="objetivo">
        <div>
          <h1>Objetivo</h1>
          <p>Crear una nueva cultura de productividad y calidad a través de la capacitación y certificación de la fuerza laboral, buscando incrementar las oportunidades de acceso a los espacios de preparación 
          para el trabajo y aspirar con esto, a un desempeño laboral de calidad, fortaleciendo su competitividad profesional</p>
        </div>
        <div>
          <img src="../assets/img-objetivo.jpg" alt="" class="imagen-valores">
        </div>
      </div>
      <div class="valores">
        <div>
          <h1 style="margin-left: 10px;">Valores</h1>
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
        <div>
          <h1>Beneficios para las empresas</h1>
          <li>Ser más productiva y competitiva.</li>
          <li>Tener mayores oportunidades de crecimiento y desarrollo nacional e internacional.</li>
          <li>Generar más y mejores empleos.</li>
          <li>Utilizar de mejor manera la maquinaria y el equipo.</li>
          <li>Disminuir los riesgos de trabajo.</li>
          <li>Contar con personal especializado.</li>
          <li>Aumentar los niveles de eficiencia y eficacia.</li>
          <li>Reducir los costos de producción y de operación.</li>
        </div>
        <div>
          <img src="../assets/img-empresa.jpg" alt="" class="imagen-valores">
        </div>
      </div>
      <div class="beneficios-empleados">
        <div>
          <h1>Beneficios para los empleados</h1>
          <li>Reconocimiento a través de un documento de legalidad nacional y/o internacional, que respalda sus competencias laborales.</li>
          <li>Aumento de la posibilidad de encontrar empleo mejor remunerado.</li>
          <li>Disminución de actos inseguros en el trabajo.</li>
          <li>Incremento de su motivación y desempeño laboral.</li>
        </div>
        <div>
          <img src="../assets/img-empleados.jpg" alt="" class="imagen-valores">
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

@media (max-width: 776px) {
  .contenido-valores {
    width: 85%;
    margin: auto;
  }
  .imagen-valores {
    height: 200px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .imagen-valores {
    height: 210px;
  }
  .mision {
    padding: 10px;
    display: flex;
    margin-bottom: 30px;
  }
  .mision p {
    margin-right: 10px;
  }
  .vision {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px;
    margin-bottom: 30px;

  }
  .vision p, h1 {
    margin-left: 10px;
  }
  .objetivo {
    display: flex;
    padding: 10px;
    margin-bottom: 30px;

  }
  .objetivo p {
    margin-right: 10px;
  }
  .valores {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 30px;

  }
  .beneficios-empresa {
    display: flex;
    padding: 10px;
    margin-bottom: 50px;

  }
  .beneficios-empresa h1, li {
    margin-left: 15px;
  }
  .beneficios-empleados {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 30px;

  }
  .beneficios-empleados h1, li {
    margin-left: 30px;
  }
  
  
}
@media (min-width: 1024px) {
  .contenido-valores {
    width: 80%;
    margin: auto;
  }
  .imagen-valores {
    height: 210px;
  }
  .mision {
    padding: 10px;
    display: flex;
    margin-bottom: 30px;
  }
  .mision  {
    margin-right: 10px;
  }
  .vision {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px;
    margin-bottom: 30px;

  }
  .vision p  {
    margin-left: 10px;
  }
  .objetivo {
    display: flex;
    padding: 10px;
    margin-bottom: 30px;

  }
  .objetivo p {
    margin-right: 10px;
  }
  .valores {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 30px;

  }
  .beneficios-empresa {
    display: flex;
    padding: 10px;
    margin-bottom: 50px;
    justify-content: space-between;

  }
  .beneficios-empresa h1, li {
    margin-right: 15px;
  }
  .beneficios-empleados {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 30px;

  }
  .beneficios-empleados h1, li {
    margin-left: 30px;
  }
  
  
}

</style>