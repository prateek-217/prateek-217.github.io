---
layout: default
title: Contact
---

<section class="section">
    <div class="section-container">
        <h1 class="section-title">Get In Touch</h1>
        <p class="section-subtitle">Let's discuss opportunities in data engineering, backend development, or technology leadership</p>
        
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="display: flex; flex-direction: column; gap: 4rem; margin-bottom: 3rem;">
                <!-- Contact Information -->
                <div>
                    <h3 style="color: var(--text-primary); margin-bottom: 2rem; font-size: 1.5rem;">Contact Information</h3>
                    
                    <div style="space-y: 1.5rem;">
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div class="contact-icon" style="width: 45px; height: 45px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                <i class="fas fa-envelope" style="color: white; font-size: 1rem;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.25rem;">Email</p>
                                <a href="mailto:prateek.rajput3@gmail.com" style="color: var(--primary-color); text-decoration: none;">prateek.rajput3@gmail.com</a>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div class="contact-icon" style="width: 45px; height: 45px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                <i class="fab fa-linkedin" style="color: white; font-size: 1rem;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.25rem;">LinkedIn</p>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" style="color: var(--primary-color); text-decoration: none;">linkedin.com/in/prateek-rajput</a>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div class="contact-icon" style="width: 45px; height: 45px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                <i class="fab fa-github" style="color: white; font-size: 1rem;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.25rem;">GitHub</p>
                                <a href="https://github.com/prateek-217" target="_blank" style="color: var(--primary-color); text-decoration: none;">github.com/prateek-217</a>
                            </div>
                        </div>
                        
                        <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                            <div class="contact-icon" style="width: 45px; height: 45px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">
                                <i class="fas fa-map-marker-alt" style="color: white; font-size: 1rem;"></i>
                            </div>
                            <div>
                                <p style="color: var(--text-primary); font-weight: 600; margin-bottom: 0.25rem;">Location</p>
                                <p style="color: var(--text-secondary);">Singapore</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div>
                    <h3 style="color: var(--text-primary); margin-bottom: 2rem; font-size: 1.5rem;">Send a Message</h3>
                    
                    <form action="https://formspree.io/f/yourformid" method="POST" style="space-y: 1.5rem;">
                        <div class="form-row" style="margin-bottom: 1.5rem;">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your full name" />
                        </div>
                        
                        <div class="form-row" style="margin-bottom: 1.5rem;">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                        </div>
                        
                        <div class="form-row" style="margin-bottom: 1.5rem;">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required placeholder="What would you like to discuss?" />
                        </div>
                        
                        <div class="form-row" style="margin-bottom: 2rem;">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project, question, or how we can collaborate..."></textarea>
                        </div>
                        
                        <div style="text-align: center;">
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="card" style="text-align: center;">
                <h3 class="card-title">Looking for Collaboration?</h3>
                <p class="card-description" style="margin-bottom: 2rem;">
                    I'm always interested in discussing new opportunities, whether it's consulting on data architecture, building scalable systems, or leading engineering teams. Let's connect and explore how we can work together.
                </p>
                <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                    <a href="mailto:prateek.rajput3@gmail.com" class="btn btn-primary">
                        <i class="fas fa-envelope"></i> Email Me
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" class="btn btn-outline">
                        <i class="fab fa-linkedin"></i> Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
input, textarea {
    background: rgba(26, 31, 53, 0.5) !important;
    backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(0, 212, 255, 0.2) !important;
    border-radius: 0.75rem !important;
    color: var(--text-primary) !important;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif !important;
    font-size: 1rem !important;
    padding: 0.875rem 1rem !important;
    width: 100% !important;
    transition: all 0.3s ease !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}

input::placeholder, textarea::placeholder {
    color: var(--text-light) !important;
    opacity: 0.7 !important;
}

input:focus, textarea:focus {
    outline: none !important;
    border-color: var(--primary-color) !important;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
    background: rgba(26, 31, 53, 0.7) !important;
}

input:hover, textarea:hover {
    border-color: rgba(0, 212, 255, 0.4) !important;
    background: rgba(26, 31, 53, 0.6) !important;
}

.form-row {
    display: flex !important;
    align-items: center !important;
    gap: 1rem !important;
}

.form-row label {
    display: block !important;
    color: var(--text-primary) !important;
    font-weight: 500 !important;
    font-size: 0.95rem !important;
    min-width: 80px !important;
    margin: 0 !important;
    flex-shrink: 0 !important;
}

.form-row input, .form-row textarea {
    flex: 1 !important;
}

/* For textarea, we need special alignment */
.form-row:has(textarea) {
    align-items: flex-start !important;
}

.form-row:has(textarea) label {
    padding-top: 0.875rem !important;
}
</style>