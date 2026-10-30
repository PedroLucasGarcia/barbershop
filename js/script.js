// Royal Lion Studio — scripts globais

// Menu mobile
const btnMenu = document.querySelector(".btn-menu");
const navLinks = document.querySelector(".nav-links");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// Animação de entrada suave (reveal)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Agendamento via WhatsApp
// Substitua o número pelo WhatsApp real do estabelecimento (DDD + nº, só dígitos)
const WHATSAPP_NUMBER = "5511999999999";

const form = document.querySelector("#booking-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name") || "";
    const service = data.get("service") || "";
    const professional = data.get("professional") || "";
    const date = data.get("date") || "";
    const time = data.get("time") || "";
    const notes = data.get("notes") || "";

    const message = [
      `Olá! Gostaria de agendar no Royal Lion Studio.`,
      `Nome: ${name}`,
      `Serviço: ${service}`,
      professional ? `Profissional: ${professional}` : "",
      `Data: ${date}`,
      `Horário: ${time}`,
      notes ? `Observações: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}
