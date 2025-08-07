/**
 * Cursor Effects
 * Handles custom cursor effects for desktop
 */
export class CursorEffects {
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
