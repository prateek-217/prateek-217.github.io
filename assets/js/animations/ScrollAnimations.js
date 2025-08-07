/**
 * Scroll Animations
 * Handles scroll-triggered animations
 */
export class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        this.addFadeInClass();
        this.setupIntersectionObserver();
    }

    addFadeInClass() {
        const elementsToAnimate = document.querySelectorAll('.card, .post-card, .section-title, .section-subtitle');
        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in');
            this.elements.push(el);
        });
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.elements.forEach(el => this.observer.observe(el));
    }
}
