// Selecciona el boton rayas y con la opcion clicl va hacer aparecer o desaparecer menu 
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".navmenu").classList.toggle("show");   /*el tagle show significa si esta abierto un click lo cierra y si esta cerrado un click lo abre*/
  });
//   Aqui agrego q elementos van ir apareciendo mediante vamos bajando la pagina
  ScrollReveal().reveal('.cabecera');
  ScrollReveal().reveal('.nuevasnoticias', { delay: 500 });
  ScrollReveal().reveal('.social', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });