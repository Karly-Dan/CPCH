<template>
    <main style="margin: 0; font-family: Arial, Helvetica, sans-serif;">
      <h1 style="  font-size: 25px; border-left: 7px solid darkorange; padding-left: 10px;">Gestor de Campaña</h1>
      <div style="box-shadow: var(--shd,0 1px 4px rgba(0,0,0,.6)); position: relative; width: 80%; margin: auto; margin-top: 20px; height: 305px; text-align: center; background-color: #00467a; color: white;">
        <div style="background-color: white;">
          <img src="../assets/sello.jpeg" alt="imagen" style="height: auto; width: 120px;">
        </div>
        <h1 style="font-family: Arial, Helvetica, sans-serif;">CPCH</h1>
        <div style="background-color: white; height: 40px; text-align: center; cursor: pointer;">
          <img src="../assets/facebook(1).png" alt="" style="padding: 7px;">
          <img src="../assets/instagram.png" alt="" style="padding: 7px;">
          <img src="../assets/whatsapp.png" alt="" style="padding: 7px;">
          <img src="../assets/correo(1).png" alt="" style="padding: 7px;">
        </div>
      </div>
      <div style="background-color: #f3f4ed; height: 100px; margin-top: -72px;"></div>
      <div style="background-color: #f3f4ed; padding: 20px;">
        <h1 style="margin: 0; font-size: 25px; text-align: center;">Centro de Evaluación Conocer</h1>
        <p style="text-align: center;">Un Organismo Certificador es una persona moral, organización o institución pública o privada, unidad administrativa de alguna Dependencia, Entidad o su similar en los niveles de gobierno Federal, Estatal o Municipal, acreditada por el CONOCER para certificar las competencias de las personas, con base en Estándares de Competencia inscritos en el Registro Nacional de Estándares de Competencia, así como para acreditar, previa autorización del CONOCER, Centros de Evaluación y/o Evaluadores Independientes en uno o varios Estándares de Competencia, inscritos en el Registro Nacional de Estándares de Competencia, durante un periodo determinado.</p>
      </div>
      <div style="background-color: #f3f4ed; margin-bottom: 20px;">
        <tarjeta
        titulo="Un Organismo Certificador debe:"
        />
        <br>
        <br>
        <tarjetaLista
        titulo2="Los Organismos Certificadores deben asegurar que la certificación de competencias que realizan"
        sub="Cumpla con los siguientes principios rectores:"
        />
        <br>
        <br>
      </div>
      <h1 style="height: 5px; background-color: darkorange; width: 70%; text-align: center; margin: auto;"></h1>
      <div style=" text-align: center; padding: 10px">
        <h1 style="font-size: 20px;">¿Cuáles son las principales funciones de un Organismo Certificador?</h1>
        <p>CERTIFICAR LAS COMPETENCIAS DE LAS PERSONAS CON BASE EN LOS ESTÁNDARES DE COMPETENCIA INSCRITOS EN EL REGISTRO NACIONAL DE COMPETENCIAS EN LOS QUE SE ENCUENTREN ACREDITADOS.</p>
      </div>
      <img src="../assets/certificado.png" alt="" style="display: flex; margin: auto;"> 
      <br>
      <h1 style="height: 5px; background-color: darkorange; width: 70%; text-align: center; margin: auto;"></h1>
      <br>
      <div style="background-color: rgb(243, 244, 237); margin-bottom: 20px;">
        <h2 style="font-size: 20px; text-align: center; padding-top: 10px;">¿Qué requisitos se deben cumplir para la acreditación inicial del Organismo Certificador?</h2>
        <table>
          <tr>
            <td style= "border: 2px solid darkorange;">1. Solicitud de información para la Acreditación Inicial o por Primera Vez</td>
            <td style= "border: 2px solid #00467a;">2. Solicitud de acreditación</td>
          </tr>
          <tr>
            <td  style= "border: 2px solid #00467a;">3. Carta compromiso</td>
            <td  style= "border: 2px solid darkorange;">4. Acta constitutiva o documentos legales</td>
          </tr>
          <tr>
            <td  style= "border: 2px solid darkorange;">5. Identificación oficial del Representante Legal</td>
            <td  style= "border: 2px solid #00467a;">6. Cédula de identificación fiscal</td>
          </tr>
          <tr>
            <td  style= "border: 2px solid #00467a;">7. Comprobante del domicilio</td>
            <td  style= "border: 2px solid darkorange;">8. Proyecto de participación en el Sistema Nacional de Competencias</td>
          </tr>
        </table>
      </div>
    </main>
  </template>
  
  <script>
  import tarjeta from '../components/tarjeta.vue';
  import tarjetaLista from '../components/tarjetaLista.vue';
  export default {
    components: {
      tarjeta,
      tarjetaLista,
    }
  }
  </script>
  <style>
  body {
    margin: 0;
  }
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
}

td, th {
  text-align: left;
  padding: 8px;
}
  </style>