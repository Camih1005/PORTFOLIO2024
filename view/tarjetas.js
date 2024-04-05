// let sobremi = document.getElementById("btSobremi")
// let keyframes = document.styleSheets[0].cssRules
// let miKeyframe = null;



// sobremi.addEventListener("click",()=>{
//     for (let i = 0; i < keyframes.length; i++) {
//         if (keyframes[i].name === "gradient") {
//           miKeyframe = keyframes[i];
//           break;
//         }
//       }
//       if (miKeyframe) {
//         // Agrega una nueva regla al keyframe
//         miKeyframe.appendRule("0% { background-image: url('./imagenes/background\ humo\ verde.webp');background-position: 0% 50;background-size: 500% 500%; }");
//       }
// })
//ABOUTME

/*VARIABLES GLOBALES*/
const tarjeID = document.getElementById("Tajetas")


const botAboutme = document.getElementById("btSobremi")
 botAboutme.addEventListener("click",()=>{
    
    tarjeID.innerHTML = "<p class ='aboutme animate__animated animate__zoomIn'> Me destaco por mi rápida capacidad de aprendizaje y mis sólidos conocimientos. Me apasionan los desafíos y en este momento estoy inmerso en el estudio de programación de software. Mi integridad, responsabilidad y honestidad, junto con un destacado liderazgo y compromiso en mis tareas, me convierten en un colaborador valioso. Tengo habilidades excepcionales para trabajar en equipo, así como para aprender y enseñar con facilidad. Me especializo en el manejo de bases de datos en MySQL y Java en el backend, así como en el desarrollo del frontend utilizando frameworks como Astro, Bulma y Express.js para el backend</p>"

})

//PROYECTOS
const botProyect = document.getElementById("proyect")
botProyect.addEventListener("click",()=>{

    tarjeID.innerHTML = "<p class ='aboutme animate__animated animate__zoomIn'> Me destaco por mi rápida capacidad de aprendizaje y mis sólidos conocimientos. Me apasionan los desafíos y en este momento estoy inmerso en el estudio de programación de software. Mi integridad, responsabilidad y honestidad, junto con un destacado liderazgo y compromiso en mis tareas, me convierten en un colaborador valioso. Tengo habilidades excepcionales para trabajar en equipo, así como para aprender y enseñar con facilidad. Me especializo en el manejo de bases de datos en MySQL y Java en el backend, así como en el desarrollo del frontend utilizando frameworks como Astro, Bulma y Express.js para el backend</p>"

})

const botInicio = document.getElementById("Btinicio")
botInicio.addEventListener("click",()=>{

    tarjeID.innerHTML = '<h1 id="h1I" class = "animate__animated animate__zoomIn">Bienvenido a mi portafolio</h1>'

})

var punto = document.getElementById("punto");

  document.body.style.cursor = 'none';

 
  document.addEventListener('mousemove', function(e) {
    
    document.body.style.cursor = 'none';

    punto.style.left = e.clientX - punto.offsetWidth / 2 + 'px'; // Ajustar la posición X del punto 
    punto.style.top = e.clientY - punto.offsetHeight / 2 + 'px'; // Ajustar la posición Y del punto 
  });





