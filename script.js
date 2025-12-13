document.addEventListener('DOMContentLoaded', () => {

    // 1. Sélectionner tous les éléments à animer
    // On cible les articles, sections, cartes, etc.
    const revealElements = document.querySelectorAll("article, section, h1, .actor-card, .team-card");

    // 2. Créer l'observateur (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajoute la classe 'active' quand l'élément est visible
                entry.target.classList.add('active');
                // On arrête d'observer une fois animé (optionnel)
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // L'animation se déclenche quand 15% de l'élément est visible
        rootMargin: "0px 0px -50px 0px"
    });

    // 3. Appliquer la classe initiale et lancer l'observation
    revealElements.forEach(el => {
        el.classList.add('reveal'); // Rend invisible au départ
        revealObserver.observe(el);
    });
});