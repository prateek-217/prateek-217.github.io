/**
 * Mobile Navigation
 * Handles mobile menu functionality
 */
export class MobileNavigation {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (this.navToggle && this.navMenu) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.navToggle.addEventListener('click', () => this.toggleMenu());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.animateHamburger();
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.resetHamburger();
    }

    animateHamburger() {
        const bars = this.navToggle.querySelectorAll('.bar');
        const isActive = this.navMenu.classList.contains('active');
        
        bars.forEach((bar, index) => {
            if (isActive) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    }

    resetHamburger() {
        const bars = this.navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
}
