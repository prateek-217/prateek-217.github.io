// Modern Futuristic JavaScript for Developer Portfolio

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        // Create canvas for particles
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particles';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${190 + Math.random() * 20}, 100%, 70%)`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            
            // Draw connections to nearby particles
            this.particles.forEach((otherParticle, otherIndex) => {
                if (index !== otherIndex) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.strokeStyle = particle.color;
                        this.ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        // Add fade-in class to elements
        const elementsToAnimate = document.querySelectorAll('.card, .post-card, .section-title, .section-subtitle');
        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in');
            this.elements.push(el);
        });

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

// Typing Animation
class TypingAnimation {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Navbar Scroll Effects
class NavbarEffects {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
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
            this.navbar.style.background = 'rgba(10, 14, 26, 0.9)';
            this.navbar.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(10, 14, 26, 0.8)';
            this.navbar.style.boxShadow = 'none';
        }
        
        this.lastScrollTop = scrollTop;
    }
}

// Mobile Navigation
class MobileNavigation {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());
            
            this.navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        }
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

// Smooth Scrolling
class SmoothScrolling {
    constructor() {
        this.init();
    }

    init() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Interactive Elements
class InteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.addCardTiltEffect();
        this.addButtonRippleEffect();
        this.addImageParallax();
    }

    addCardTiltEffect() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }

    addButtonRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.style.position = 'relative';
                button.style.overflow = 'hidden';
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    addImageParallax() {
        // Disabled parallax to prevent overlap issues
        // const heroSection = document.querySelector('.hero');
        // Parallax can cause content overlap issues, keeping disabled
    }
}

// Cursor Effects
class CursorEffects {
    constructor() {
        this.cursor = null;
        this.cursorInner = null;
        this.init();
    }

    init() {
        if (window.innerWidth > 768) {
            this.createCursor();
            this.addEventListeners();
        }
    }

    createCursor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        
        this.cursorInner = document.createElement('div');
        this.cursorInner.className = 'custom-cursor-inner';
        this.cursorInner.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00d4ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: none;
        `;
        
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorInner);
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => {
            if (this.cursor && this.cursorInner) {
                this.cursor.style.left = e.clientX - 10 + 'px';
                this.cursor.style.top = e.clientY - 10 + 'px';
                
                this.cursorInner.style.left = e.clientX - 2 + 'px';
                this.cursorInner.style.top = e.clientY - 2 + 'px';
            }
        });

        const interactiveElements = document.querySelectorAll('a, button, .card, .btn');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (this.cursor) {
                    this.cursor.style.transform = 'scale(2)';
                }
            });
            
            el.addEventListener('mouseleave', () => {
                if (this.cursor) {
                    this.cursor.style.transform = 'scale(1)';
                }
            });
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.init();
    }

    init() {
        this.monitor();
    }

    monitor() {
        this.frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - this.lastTime >= 1000) {
            const fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
            
            if (fps < 30) {
                // Reduce particle count for better performance
                console.log('Low FPS detected, optimizing...');
            }
            
            this.frameCount = 0;
            this.lastTime = currentTime;
        }
        
        requestAnimationFrame(() => this.monitor());
    }
}

// Theme Manager
class ThemeManager {
    constructor() {
        this.currentTheme = 'dark';
        this.init();
    }

    init() {
        this.loadTheme();
        this.createThemeToggle();
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            document.body.setAttribute('data-theme', this.currentTheme);
        }
    }

    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '🌙';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            top: 50%;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid rgba(0, 212, 255, 0.2);
            background: rgba(26, 31, 53, 0.8);
            backdrop-filter: blur(20px);
            color: #00d4ff;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            transform: translateY(-50%);
        `;
        
        themeToggle.addEventListener('click', () => this.toggleTheme());
        document.body.appendChild(themeToggle);
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('portfolio-theme', this.currentTheme);
    }
}

// Main App Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ParticleSystem();
    new ScrollAnimations();
    new NavbarEffects();
    new MobileNavigation();
    new SmoothScrolling();
    new InteractiveElements();
    new CursorEffects();
    new PerformanceMonitor();
    new ThemeManager();
    
    // Add typing animation to hero subtitle with glowing cursor
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        console.log('Hero subtitle found, starting typewriter effect');
        const originalText = heroSubtitle.textContent;
        heroSubtitle.innerHTML = '';
        
        // Create a visible cursor element
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        cursor.innerHTML = '|';
        cursor.style.cssText = `
            color: #00d4ff !important;
            font-weight: 100 !important;
            animation: typewriter-blink 1s infinite !important;
            text-shadow: 0 0 8px #00d4ff, 0 0 16px #00d4ff !important;
            margin-left: 3px !important;
            display: inline !important;
            font-size: inherit !important;
        `;
        
        heroSubtitle.appendChild(cursor);
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                const textSpan = document.createElement('span');
                textSpan.textContent = originalText.substring(0, i + 1);
                heroSubtitle.innerHTML = '';
                heroSubtitle.appendChild(textSpan);
                heroSubtitle.appendChild(cursor);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                // Keep cursor blinking after typing is complete
                const finalTextSpan = document.createElement('span');
                finalTextSpan.textContent = originalText;
                heroSubtitle.innerHTML = '';
                heroSubtitle.appendChild(finalTextSpan);
                heroSubtitle.appendChild(cursor);
            }
        };
        
        setTimeout(typeWriter, 1000);
    } else {
        console.log('Hero subtitle not found');
    }
    
    // Add CSS for animations
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
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
    `;
    
    document.head.appendChild(style);
    
    console.log('🚀 Futuristic portfolio loaded successfully!');
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