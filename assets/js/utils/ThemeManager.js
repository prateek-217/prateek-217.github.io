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
        this.updateToggleBackground();
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
            top: auto;
            bottom: 10%;
            right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: var(--bg-glass);
            backdrop-filter: blur(20px);
            color: var(--primary-color);
            font-size: 24px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1);
            outline: none;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        `;
        
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(this.themeToggle);
    }

    updateToggleIcon() {
        if (this.themeToggle) {
            if (this.currentTheme === 'dark') {
                this.themeToggle.innerHTML = '☀️';
                this.themeToggle.style.fontSize = '28px'; // Larger sun icon
            } else {
                this.themeToggle.innerHTML = '🌙';
                this.themeToggle.style.fontSize = '20px'; // Normal moon icon
            }
            this.themeToggle.setAttribute('aria-label', 
                `Switch to ${this.currentTheme === 'dark' ? 'light' : 'dark'} theme`
            );
        }
    }

    toggleTheme() {
        console.log('Toggling theme from:', this.currentTheme);
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling theme to:', this.currentTheme);
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('portfolio-theme', this.currentTheme);
        this.updateToggleIcon();
        this.updateToggleBackground();
        
        // Notify other components of theme change
        this.notifyThemeChange();
    }

    updateToggleBackground() {
        if (this.themeToggle) {
            if (this.currentTheme === 'dark') {
                this.themeToggle.style.background = '#87CEEB'; // Light blue sky - solid color
                this.themeToggle.style.boxShadow = '0 0 30px rgba(135, 206, 235, 0.6), 0 0 60px rgba(135, 206, 235, 0.3), 0 0 90px rgba(135, 206, 235, 0.1), 0 0 120px rgba(135, 206, 235, 0.05)';
                console.log('Dark mode: Setting background to light blue sky (solid)');
            } else {
                this.themeToggle.style.background = '#1e3a8a'; // Night blue - solid color
                this.themeToggle.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3), 0 8px 40px rgba(0, 0, 0, 0.2), 0 12px 60px rgba(0, 0, 0, 0.1)';
                console.log('Light mode: Setting background to night blue (solid)');
            }
        } else {
            console.log('Theme toggle element not found!');
        }
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
