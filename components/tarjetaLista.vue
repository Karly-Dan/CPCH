<template>
    <div style="width: 80%; box-shadow: var(--shd,0 1px 4px rgba(0,0,0,.6)); margin: auto; background-color: white;">
      <div>
          <h1 style="margin: 0; border-left: 8px solid darkorange; padding-left: 10px; font-size: 20px; padding-top: 10px;">{{ titulo2 }}</h1>
          <p style="margin: 0; border-left: 8px solid darkorange; padding-left: 10px;">{{ sub }}</p>
          <ul style="padding: 25px; margin: 0;">
            <li>Libre Acceso</li>
            <li>Excelencia en el Servicio</li>
            <li>Transparencia</li>
            <li>Imparcialidad</li>
            <li>Objetividad</li>
          </ul>
      </div>
      <div>
          <img src="../assets/redconocer.jpg" alt="imagen" style="display: block; height: 100%; width: 100%;">
      </div>
    </div>
  </template>

<script>
export default {
  props: {
        titulo2: {
            type: String,
            default: '',
        },
        sub: {
          type: String,
          default: '',
        },
        parrafo: {
          type: String,
          default: '',
        }
    },
}
</script>

<style>

</style>