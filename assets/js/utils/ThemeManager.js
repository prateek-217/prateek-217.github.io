/**
 * Theme Management Utility
 * Handles theme switching and persistence
 */
export class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.themeToggle = null;
        this.init();
    }

    init() {
        this.loadTheme();
        this.createThemeToggle();
        this.updateToggleIcon();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
        document.body.setAttribute('data-theme', this.currentTheme);
    }

    createThemeToggle() {
        this.themeToggle = document.createElement('button');
        this.themeToggle.className = 'theme-toggle';
        this.themeToggle.setAttribute('aria-label', 'Toggle theme');
        this.themeToggle.style.cssText = `
            position: fixed;
            top: 50%;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            color: var(--primary-color);
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(this.themeToggle);
    }

    updateToggleIcon() {
        if (this.themeToggle) {
            this.themeToggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
            this.themeToggle.setAttribute('aria-label', 
                `Switch to ${this.currentTheme === 'dark' ? 'light' : 'dark'} theme`
            );
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('portfolio-theme', this.currentTheme);
        this.updateToggleIcon();
        
        // Notify other components of theme change
        this.notifyThemeChange();
    }

    notifyThemeChange() {
        // Dispatch custom event for theme change
        const event = new CustomEvent('themeChanged', { 
            detail: { theme: this.currentTheme } 
        });
        document.dispatchEvent(event);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}
