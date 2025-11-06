// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Si el href es solo "#" o no es un enlace de ancla interno, no hacer nada.
        if (href === '#' || !href.startsWith('#')) {
            return;
        }

        // Intenta encontrar un elemento que coincida con el selector del href.
        // Esto funciona para IDs como #inicio, #productos, etc.
        try {
            const targetElement = document.querySelector(href);
            
            // Si se encuentra el elemento, realiza el desplazamiento suave.
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            // Si el selector es inválido (lo que puede ocurrir con href="#"),
            // se captura el error para que no detenga otros scripts.
            console.error("Error al intentar seleccionar el ancla:", href, error);
        }
    });
});