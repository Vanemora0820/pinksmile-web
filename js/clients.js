document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const track = document.querySelector(".carrusel-track");
  const cards = document.querySelectorAll(".cliente-card");
  const total = cards.length;

  function moverCarrusel() {
    index++;
    if (index >= total) index = 0;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Cambio automático cada 5s
  setInterval(moverCarrusel, 5000);
});
