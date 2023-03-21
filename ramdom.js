// Obtener el div
const miDiv = document.getElementById("cont");

// Crear 100 puntos aleatorios
for (let i = 0; i < 20; i++) {
  // Crear un nuevo punto
  const punto = document.createElement("div");
  punto.classList.add("punto");

  // Generar una posición aleatoria para el punto
  const x = Math.floor(Math.random() * miDiv.offsetWidth);
  const y = Math.floor(Math.random() * miDiv.offsetHeight);

  // Establecer la posición del punto
  punto.style.left = `${x}px`;
  punto.style.top = `${y}px`;

  // Agregar el punto al div
  miDiv.appendChild(punto);
}

const inputs = document.querySelectorAll(".solo-numeros");

// Recorrer todos los inputs y agregar el evento de entrada
inputs.forEach(function(input) {
  input.addEventListener("input", function(event) {
    // Obtener el texto actual en el input
    const texto = input.value;

    // Reemplazar todos los caracteres que no sean números con una cadena vacía
    input.value = texto.replace(/[^\d]/g, "");
    
  });
  
});



const nombre = document.getElementById("nombres");

nombre.addEventListener("input", function() {
  // Obtener el valor actual del input
  let valorInput = nombre.value;

  // Reemplazar cualquier carácter que no sea una letra con una cadena vacía
  valorInput = valorInput.replace(/[^a-zA-Z]/g, '');

  // Actualizar el valor del input
  nombre.value = valorInput;
});

const apellido = document.getElementById("apellidos");

apellido.addEventListener("input", function() {
  // Obtener el valor actual del input
  let valorInput = apellido.value;

  // Reemplazar cualquier carácter que no sea una letra con una cadena vacía
  valorInput = valorInput.replace(/[^a-zA-Z]/g, '');

  // Actualizar el valor del input
  apellido.value = valorInput;
});

  

