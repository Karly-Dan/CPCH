<template>
  <main>
    <button @click="generateReport">ver credencial</button>
    <client-only>
    <vue-html2pdf id="pdf" filename="hehehe" ref="miejemplo" :manual-pagination="true"  pdf-content-width="100%" pdf-orientation="landscape" :enable-download="false" :preview-modal="true">
        <section slot="pdf-content" class="contenedor-pdf">
            <div class="contenido-div">
                <div class="contenido-empresa">
                    <h1 class="titulo-empresa">Centro de Profesionalización de Capital Humano</h1>
                    <p class="parrafo-empresa">Municipio: Nicolas Romero</p>
                    <p class="parrafo-empresa">Clave: CE0034-ECE198-15</p>
                </div>
                <div class="contenedor-img-pdf">
                    <img src="@/assets/logoCPCH.jpg" alt="" class="logo-pdf">
                </div>
                <div class="contenedor-datos">
                    <p class="validacion">Validación de curso a:</p>
                    <h2 class="nombre">{{ nombre }}</h2>
                    <p class="datos">Con Clave Unica de Registro de poblacion {{ curp }}, esta inscrito en el curso de {{ curso }}, con numero de matrícula: {{ matricula }}</p>
                    <h1 class="año">{{ numeroDeEstandar }}</h1>
                    <br><br><br><br><br><br><br><br><br><br><br>
                </div>
            </div>
        </section>
    </vue-html2pdf>
    </client-only>
  </main>
</template>

<script>
import { firestore } from '@/plugins/firebase'
import { doc, getDoc } from 'firebase/firestore'

export default {
    name: "karla",
    data() {
        return {
            nombre: "",
            curp: "",
            matricula: "",
            curso: "",
            numeroDeEstandar: ""
        }
    },
    async mounted () {
        const docRef = doc(firestore, "certifications", this.$route.params.id)
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data());
        this.nombre = docSnap.data().name
        this.curp = docSnap.data().curp 
        this.matricula = docSnap.data().matricula
        this.curso = docSnap.data().course
        this.numeroDeEstandar = docSnap.data().standard
    },
    methods: {
        generateReport () {
            this.$refs.miejemplo.generatePdf()
        }
    },

}
</script>

<style>
.contenido-empresa {
    text-align: center;
    color: #005a9c;
    letter-spacing: .25em;
    word-spacing: .25em;
    margin-bottom: 40px;
    margin-top: 50px;
}
.contenido-div {
    position: relative;
    color: #ffffff; 
    text-align: center;
}
.contenedor-pdf {
    position: relative;

}
.contenedor-pdf::before {
    content: "";
    background-image: url('@/assets/logoCPCH.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.05;
}
.titulo-empresa {
    margin: 0;
    font-size: 50px;
}
.parrafo-empresa {
    font-size: 20px;
}
.parrafo-empresa {
    margin: 0;
}
.contenedor-datos {
    text-align: center;
    letter-spacing: .25em;
    word-spacing: .25em;
    color: #484141;
}
.validacion {
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-left: 250px;
}
.nombre {
    font-size: 35px;
}
.datos {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-left: 100px;
    padding-right: 100px;
    text-align: center;
}
.año {
    font-size: 35px;
    color: rgb(19, 17, 17);
}
.logo-pdf {
    height: 190px;
    margin-top: -140px;
    margin-right: 80px;
}
.contenedor-img-pdf {
    float: right;
}
</style>