const whatsappNumber = "5511971126491"; // Altere aqui quando precisar
const whatsappLink = `https://wa.me/${whatsappNumber}`;

document.querySelectorAll('.btn-whatsapp-nav').forEach(btn => {
  btn.setAttribute('href', whatsappLink);
});