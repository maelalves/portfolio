// Seleciona o btn
const btnMobile = document.getElementById("btn-mobile");

// função que ativa o btn ao clicar
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  // Seleciona o nav no header
  const nav = document.getElementById("nav");
  // Adicione (active) cano não tenha e remova caso tenha
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currenteTarget.setAttribute("aria-label", "fechar Menu");
  } else {
    event.currenteTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);