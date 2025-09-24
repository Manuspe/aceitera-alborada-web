// Smooth Scroll
// Evita error con href="#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target === "#") {
            // Previene el salto arriba y NO intenta seleccionar
            e.preventDefault();
            return;
        }
        if (target && target.length > 1) { // solo si hay algo después del "#"
            const el = document.querySelector(target);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});