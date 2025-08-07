/**
 * Main Entry Point for Portfolio Application
 * Imports and initializes the modular portfolio application
 */

import { PortfolioApp } from './core/PortfolioApp.js';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});