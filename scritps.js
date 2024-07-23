// Scripts de navegador totop y lateral - cabecera
var navbar = document.querySelector(".navbar");
var barraLateral = document.getElementById("barraLateral");

// Define una función de desplazamiento común
function handleScroll() {
  if (window.innerWidth < 1104) {
    // Para pantallas pequeñas
    barraLateral.style.display = "none";
    navbar.style.display = "flex";
  } else {
    // Para pantallas grandes
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      barraLateral.style.display = "block";
      navbar.style.display = "none";
    } else {
      barraLateral.style.display = "none";
      navbar.style.display = "flex";
    }
  }
}

// Asigna la función de desplazamiento a la ventana
window.onscroll = handleScroll;

// Llama a la función de desplazamiento al cargar la página para establecer el estado inicial
handleScroll();

// Se solapa al poner el cursor encima de las cartas del "Proyectos"
document.addEventListener("DOMContentLoaded", (event) => {
  const boxes = document.querySelectorAll(".card");

  boxes.forEach((card) => {
    card.addEventListener("mouseover", () => {
      card.style.zIndex = "1";
    });

    card.addEventListener("mouseout", () => {
      card.style.zIndex = "0";
    });
  });
});

// Mensaje de alerta cuando se envia un mensaje
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el formulario por su ID
  const form = document.getElementById('contacto');

  // Agregar un event listener para el evento 'submit'
  form.addEventListener('submit', function() {
      // Mostrar la alerta al presionar el boton de enviar
      alert('Ahora te va a redirigir a una página con un captcha, y una vez que lo completes, tu mensaje se va a enviar exitosamente. ¡Gracias!\n\n\nP.D.: Esto puede tardar un rato. Gracias, nuevamente, por tu comprensión.');
  });
});

//boton Mas info ... Mostrar/Ocultar
function mostrarOcultarDiv() {
  var div = document.getElementById("masInfo");
  if (div.style.display === "none") {
      div.style.display = "block";
  } else {
      div.style.display = "none";
  }
}