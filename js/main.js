/*
 * XRG Memorias — configuración de la landing.
 * Antes de publicar, reemplaza WHATSAPP_NUMBER por el número de empresa
 * con código de país, solo dígitos. Chile: 56 + número, sin + ni espacios.
 */
const WHATSAPP_NUMBER = "56920212940"; // REEMPLAZAR por el número real de XRG
const DEFAULT_MESSAGE = "Hola, quisiera conocer más sobre los homenajes de XRG Memorias.";

function whatsappUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappUrl(DEFAULT_MESSAGE);
  link.addEventListener("click", (event) => {
    if (WHATSAPP_NUMBER === "56912345678") {
      event.preventDefault();
      alert("Antes de publicar, configura el número real de WhatsApp en js/main.js.");
    }
  });
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const product = link.dataset.product;
    const message = `Hola, quisiera consultar por: ${product}. Me gustaría recibir orientación y un presupuesto sin compromiso.`;
    link.href = whatsappUrl(message);
    if (WHATSAPP_NUMBER === "56912345678") {
      // El destino se configura en el archivo js/main.js antes de publicar.
      link.href = "#contacto";
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("is-open");
      menuToggle.focus();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
