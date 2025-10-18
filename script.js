
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona apenas os links destinados à rolagem suave
    const smoothScrollLinks = document.querySelectorAll('.navbar-links a, a.btn-primary[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Lida com o clique no logotipo para rolar até o topo
    document.querySelector('.navbar-brand').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});