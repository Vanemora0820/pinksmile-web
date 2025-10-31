window.onload = function() {
  alert(
    "El siguiente contenido está dirigido a mayores de 18 años.\n" +
    "Promovemos el amor propio, el respeto y la intimidad saludable."
  );

  let edad = prompt("Por favor, ingresa tu edad:");

  if (edad === null) {
    window.location.href = "../index.html"; // Si cancela
    return;
  }

  edad = parseInt(edad);
  if (isNaN(edad) || edad < 18) {
    alert("🚫 Lo sentimos, este contenido es solo para mayores de edad. Te redirigiremos al inicio.");
    window.location.href = "../index.html";
    return;
  }

  const btn = document.getElementById("btnContinuar");
  if (!btn) {
    console.warn("No se encontró el botón #btnContinuar en la página.");
    return;
  }

  // Mostrar el botón y añadir animación
  btn.classList.remove("oculto");
  btn.classList.add("fade-in");

  // Redirigir al home al hacer clic
  btn.addEventListener("click", function () {
    window.location.href = "pages/home.html";
  });
};
