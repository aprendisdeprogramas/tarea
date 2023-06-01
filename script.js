// Obtiene el contenedor de la lluvia
var rainContainer = document.querySelector('.rain-effect');

// Crea una función para generar números aleatorios en un rango específico
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Define la cantidad de imágenes de lluvia que deseas mostrar
var numRainImages = 50;

// Crea las imágenes de lluvia y las agrega al contenedor
for (var i = 0; i < numRainImages; i++) {
  // Crea un elemento de imagen
  var rainImage = document.createElement('img');

  // Establece la ruta de la imagen PNG que deseas usar
  rainImage.src = 'img/img1.png';

  // Establece una clase CSS para las imágenes de lluvia
  rainImage.classList.add('rain-image');

  // Establece el tamaño y posición inicial de la imagen de lluvia
  rainImage.style.width = getRandomNumber(20, 60) + 'px';
  rainImage.style.left = getRandomNumber(0, 100) + '%';
  rainImage.style.animationDuration = getRandomNumber(5, 15) + 's';

  // Agrega la imagen al contenedor
  rainContainer.appendChild(rainImage);
}
