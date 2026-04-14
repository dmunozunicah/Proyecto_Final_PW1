const elements = document.querySelectorAll('#inicio h1, #inicio h2, #inicio p, #inicio li');

elements.forEach(el => {
  el.classList.add('fade-in');
});

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 50) {
      el.classList.add('visible');
    }
  });
});

const eventos = document.querySelectorAll('#inicio li');

eventos.forEach(evento => {
  evento.addEventListener('click', () => {
    alert("¡Te esperamos en este evento en Carajillo! ☕🍽️");
  });
});