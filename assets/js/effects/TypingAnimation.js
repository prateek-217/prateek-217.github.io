/**
 * Typing Animation
 * Handles typewriter effect for text elements
 */
export class TypingAnimation {
    constructor(element, options = {}) {
        this.element = element;
        this.text = element.textContent;
        this.speed = options.speed || 50;
        this.delay = options.delay || 1000;
        this.cursor = null;
        this.currentIndex = 0;
        this.isTyping = false;
        this.init();
    }

    init() {
        this.element.innerHTML = '';
        this.createCursor();
        this.startTyping();
    }

    createCursor() {
        this.cursor = document.createElement('span');
        this.cursor.className = 'typewriter-cursor';
        this.cursor.innerHTML = '|';
        this.applyCursorStyles();
    }

    applyCursorStyles() {
        const theme = document.body.getAttribute('data-theme') || 'dark';
        if (theme === 'light') {
            this.cursor.style.cssText = `
                color: #1e293b !important;
                font-weight: 400 !important;
                animation: typewriter-blink 1s infinite !important;
                text-shadow: none !important;
                margin-left: 3px !important;
                display: inline !important;
                font-size: inherit !important;
            `;
        } else {
            this.cursor.style.cssText = `
                color: #00d4ff !important;
                font-weight: 100 !important;
                animation: typewriter-blink 1s infinite !important;
                text-shadow: 0 0 8px #00d4ff, 0 0 16px #00d4ff !important;
                margin-left: 3px !important;
                display: inline !important;
                font-size: inherit !important;
            `;
        }
    }

    startTyping() {
        setTimeout(() => {
            this.isTyping = true;
            this.typeNextCharacter();
        }, this.delay);
    }

    typeNextCharacter() {
        if (!this.isTyping || this.currentIndex >= this.text.length) {
            this.finishTyping();
            return;
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = this.text.substring(0, this.currentIndex + 1);
        
        this.element.innerHTML = '';
        this.element.appendChild(textSpan);
        this.element.appendChild(this.cursor);
        
        this.currentIndex++;
        setTimeout(() => this.typeNextCharacter(), this.speed);
    }

    finishTyping() {
        const finalTextSpan = document.createElement('span');
        finalTextSpan.textContent = this.text;
        this.element.innerHTML = '';
        this.element.appendChild(finalTextSpan);
        this.element.appendChild(this.cursor);
    }

    updateCursorStyles() {
        this.applyCursorStyles();
    }
}
