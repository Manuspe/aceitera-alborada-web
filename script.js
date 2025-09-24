// Smooth Scroll
// Evita error con href="#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        if (target.length > 1) { // Solo si hay algo después del "#"
            e.preventDefault();
            const el = document.querySelector(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
