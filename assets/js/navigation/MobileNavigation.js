/**
 * Mobile Navigation
 * Handles mobile menu functionality
 */
export class MobileNavigation {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileBackdrop = document.getElementById('mobile-menu-backdrop');
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
        
        // Close menu when backdrop is clicked
        if (this.mobileBackdrop) {
            this.mobileBackdrop.addEventListener('click', () => this.closeMenu());
        }

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        const isActive = this.navMenu.classList.contains('active');
        
        if (isActive) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        console.log('Opening mobile menu');
        this.navMenu.classList.add('active');
        if (this.mobileBackdrop) {
            this.mobileBackdrop.classList.add('active');
        }
        document.body.style.overflow = 'hidden';
        this.animateHamburger();
    }

    closeMenu() {
        console.log('Closing mobile menu');
        this.navMenu.classList.remove('active');
        if (this.mobileBackdrop) {
            this.mobileBackdrop.classList.remove('active');
        }
        document.body.style.overflow = '';
        this.resetHamburger();
    }

    animateHamburger() {
        const bars = this.navToggle.querySelectorAll('.bar');
        
        bars.forEach((bar, index) => {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
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
