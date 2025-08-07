/**
 * Navigation Effects
 * Handles navbar scroll effects and theme-aware styling
 */
export class NavigationEffects {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        if (this.navbar) {
            this.bindEvents();
        }
    }

    bindEvents() {
        window.addEventListener('scroll', () => this.handleScroll());
        document.addEventListener('themeChanged', () => this.refreshStyles());
    }

    getTheme() {
        return document.body.getAttribute('data-theme') || 'dark';
    }

    getScrolledBackground() {
        const theme = this.getTheme();
        return theme === 'light' 
            ? 'rgba(248, 250, 252, 0.95)' 
            : 'rgba(10, 14, 26, 0.9)';
    }

    getDefaultBackground() {
        const theme = this.getTheme();
        return theme === 'light' 
            ? 'rgba(248, 250, 252, 0.9)' 
            : 'rgba(10, 14, 26, 0.8)';
    }

    getScrolledShadow() {
        const theme = this.getTheme();
        return theme === 'light' 
            ? '0 4px 20px rgba(0, 102, 204, 0.1)' 
            : '0 4px 20px rgba(0, 212, 255, 0.1)';
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > this.lastScrollTop && scrollTop > 100) {
            this.navbar.style.transform = 'translateY(-100%)';
        } else {
            this.navbar.style.transform = 'translateY(0)';
        }
        
        // Add blur effect when scrolled
        if (scrollTop > 0) {
            this.navbar.style.background = this.getScrolledBackground();
            this.navbar.style.boxShadow = this.getScrolledShadow();
        } else {
            this.navbar.style.background = this.getDefaultBackground();
            this.navbar.style.boxShadow = 'none';
        }
        
        this.lastScrollTop = scrollTop;
    }

    refreshStyles() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 0) {
            this.navbar.style.background = this.getScrolledBackground();
            this.navbar.style.boxShadow = this.getScrolledShadow();
        } else {
            this.navbar.style.background = this.getDefaultBackground();
            this.navbar.style.boxShadow = 'none';
        }
    }
}
