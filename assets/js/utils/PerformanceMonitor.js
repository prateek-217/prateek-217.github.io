/**
 * Performance Monitoring Utility
 * Monitors and optimizes performance
 */
export class PerformanceMonitor {
    constructor() {
        this.frameCount = 0;
        this.lastTime = performance.now();
        this.fpsThreshold = 30;
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
            
            if (fps < this.fpsThreshold) {
                this.handleLowPerformance();
            }
            
            this.frameCount = 0;
            this.lastTime = currentTime;
        }
        
        requestAnimationFrame(() => this.monitor());
    }

    handleLowPerformance() {
        console.log('Low FPS detected, optimizing...');
        // Dispatch event for performance optimization
        const event = new CustomEvent('performanceWarning', { 
            detail: { fps: this.frameCount } 
        });
        document.dispatchEvent(event);
    }
}
