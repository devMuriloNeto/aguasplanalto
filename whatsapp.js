const whatsappNumber = "5511971126491"; // Altere aqui quando precisar
const whatsappLink = `https://wa.me/${whatsappNumber}`;

document.querySelectorAll('#wpp').forEach(btn => {
  btn.setAttribute('href', whatsappLink);
});
