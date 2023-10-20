
 document.getElementById("contactarBtn").addEventListener("click", function() {
  
  var correo = prompt("Por favor, ingrese su correo electrónico:");

 
  if (correo !== null && correo !== "") {
    
      alert("Gracias " + correo + ", me pondré en contacto contigo pronto!");
  } else {
     
      alert("No se proporcionó un correo válido. Por favor, inténtelo de nuevo.");
  }
});

document.getElementById('contactarBtn').addEventListener('click', function() {
    
    alert('¡Formulario enviado con éxito!');
});


const proyectosAnteriores = [
    "Proyecto 1: Desarrollo Web",
    "Proyecto 2: Aplicación Móvil",
    "Proyecto 3: Análisis de Datos",
    "Proyecto 4: Diseño Gráfico",
    "Proyecto 5: Investigación Científica",
];


function mostrarProyectos() {
    const cantidadProyectos = prompt("Ingrese la cantidad de proyectos que desea ver:");

    if (cantidadProyectos !== null) {
        const numProyectos = parseInt(cantidadProyectos);

        if (!isNaN(numProyectos) && numProyectos > 0 && numProyectos <= proyectosAnteriores.length) {
            const proyectosMostrados = proyectosAnteriores.slice(0, numProyectos);
            alert("Proyectos Anteriores:\n" + proyectosMostrados.join("\n"));
        } else {
            alert("Ingrese un número válido dentro del rango de proyectos disponibles.");
        }
    }
}


const verProyectosBtn = document.getElementById("verProyectosBtn");
verProyectosBtn.addEventListener("click", mostrarProyectos);


function mostrarAlertaCalificacion() {
    const calificacion = prompt("Por favor, califique mi hoja de vida (del 1 al 5):");

    if (calificacion !== null) {
        const numeroCalificacion = parseInt(calificacion);

        if (!isNaN(numeroCalificacion) && numeroCalificacion >= 1 && numeroCalificacion <= 5) {
            alert("¡Gracias por calificar con " + numeroCalificacion + " estrellas!");
        } else {
            alert("Ingrese una calificación válida del 1 al 5.");
        }
    }
}


const calificarBtn = document.getElementById("calificarBtn");
calificarBtn.addEventListener("click", mostrarAlertaCalificacion);

