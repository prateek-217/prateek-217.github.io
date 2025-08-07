/**
 * Portfolio Application
 * Main application class that orchestrates all components
 */
import { ThemeManager } from '../utils/ThemeManager.js';
import { PerformanceMonitor } from '../utils/PerformanceMonitor.js';
import { ParticleSystem } from '../effects/ParticleSystem.js';
import { TypingAnimation } from '../effects/TypingAnimation.js';
import { NavigationEffects } from '../navigation/NavigationEffects.js';
import { MobileNavigation } from '../navigation/MobileNavigation.js';
import { SmoothScrolling } from '../navigation/SmoothScrolling.js';
import { InteractiveElements } from '../interactive/InteractiveElements.js';
import { CursorEffects } from '../interactive/CursorEffects.js';
import { ScrollAnimations } from '../animations/ScrollAnimations.js';

export class PortfolioApp {
    constructor() {
        this.components = new Map();
        this.init();
    }

    init() {
        this.initializeComponents();
        this.bindGlobalEvents();
        this.addStyles();
        console.log('🚀 Futuristic portfolio loaded successfully!');
    }

    initializeComponents() {
        // Initialize core components
        this.components.set('themeManager', new ThemeManager());
        this.components.set('performanceMonitor', new PerformanceMonitor());
        this.components.set('particleSystem', new ParticleSystem());
        this.components.set('navigationEffects', new NavigationEffects());
        this.components.set('mobileNavigation', new MobileNavigation());
        this.components.set('smoothScrolling', new SmoothScrolling());
        this.components.set('interactiveElements', new InteractiveElements());
        this.components.set('cursorEffects', new CursorEffects());
        this.components.set('scrollAnimations', new ScrollAnimations());

        // Initialize typing animation for hero subtitle
        this.initializeTypingAnimation();
    }

    initializeTypingAnimation() {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            this.components.set('typingAnimation', new TypingAnimation(heroSubtitle, {
                speed: 50,
                delay: 1000
            }));
        }
    }

    bindGlobalEvents() {
        // Handle theme change events
        document.addEventListener('themeChanged', (event) => {
            const typingAnimation = this.components.get('typingAnimation');
            if (typingAnimation) {
                typingAnimation.updateCursorStyles();
            }
        });

        // Handle performance warnings
        document.addEventListener('performanceWarning', () => {
            console.log('Performance optimization triggered');
        });

        // Error handling
        window.addEventListener('error', (e) => {
            console.error('Portfolio error:', e.error);
        });

        // Loading animation
        window.addEventListener('load', () => {
            const loader = document.querySelector('.loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }
        });
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .typewriter-cursor {
                color: #00d4ff;
                font-weight: 300;
                animation: typewriter-blink 1s infinite;
                text-shadow: 0 0 8px #00d4ff, 0 0 16px #00d4ff;
                margin-left: 2px;
            }
            
            @keyframes typewriter-blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .custom-cursor {
                display: none;
            }
            
            @media (min-width: 769px) {
                .custom-cursor {
                    display: block;
                }
                
                * {
                    cursor: none !important;
                }
            }
            
            .theme-toggle:hover {
                transform: translateY(-50%) scale(1.1);
                box-shadow: var(--shadow-neon);
            }
        `;
        
        document.head.appendChild(style);
    }

    getComponent(name) {
        return this.components.get(name);
    }

    destroy() {
        this.components.forEach(component => {
            if (component.destroy) {
                component.destroy();
            }
        });
        this.components.clear();
    }
}
