/**
 * Particle System
 * Manages animated background particles
 */
export class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.isActive = true;
        this.init();
    }

    init() {
        this.createCanvas();
        this.resize();
        this.createParticles();
        this.animate();
        this.bindEvents();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'particles';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }

    resize() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }

    getParticleColor() {
        const theme = document.body.getAttribute('data-theme') || 'dark';
        if (theme === 'light') {
            return `hsl(${210 + Math.random() * 15}, 40%, 15%)`;
        } else {
            return `hsl(${190 + Math.random() * 20}, 100%, 70%)`;
        }
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
                color: this.getParticleColor()
            });
        }
    }

    updateParticleColors() {
        this.particles.forEach(particle => {
            particle.color = this.getParticleColor();
        });
    }

    animate() {
        if (!this.isActive) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            this.updateParticle(particle);
            this.drawParticle(particle, index);
        });
        
        requestAnimationFrame(() => this.animate());
    }

    updateParticle(particle) {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        if (particle.y > this.canvas.height) particle.y = 0;
    }

    drawParticle(particle, index) {
        // Draw particle
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fillStyle = particle.color;
        this.ctx.globalAlpha = particle.opacity;
        this.ctx.fill();
        
        // Draw connections to nearby particles
        this.drawConnections(particle, index);
    }

    drawConnections(particle, index) {
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
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('themeChanged', () => this.updateParticleColors());
        document.addEventListener('performanceWarning', () => this.optimizeForPerformance());
    }

    optimizeForPerformance() {
        // Reduce particle count for better performance
        if (this.particles.length > 50) {
            this.particles = this.particles.slice(0, 50);
        }
    }

    destroy() {
        this.isActive = false;
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
    }
}
