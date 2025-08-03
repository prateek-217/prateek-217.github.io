---
layout: default
title: Home
---

<section class="hero">
    <div class="hero-container">
        <div class="hero-avatar">
            <img src="/assets/images/profile.jpg" 
                 alt="Prateek Rajput - Senior Data Engineer" 
                 class="hero-avatar-img"
                 onerror="this.onerror=null; this.src='https://github.com/prateek-217.png';">
            <i class="fas fa-user-circle" style="font-size: 150px; color: var(--primary-color); display: none;"></i>
        </div>
        <h1 class="hero-title">Prateek Rajput</h1>
        <p class="hero-subtitle">Senior Data Engineer & Backend Engineering Leader specializing in scalable systems, big data processing, and cloud architecture</p>
        <div class="hero-cta">
            <a href="/experience" class="btn btn-primary">View Experience</a>
            <a href="/contact" class="btn btn-outline">Get In Touch</a>
        </div>
    </div>
</section>

<section class="section">
    <div class="section-container">
        <h2 class="section-title">What I Do</h2>
        <div class="card-grid">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-database"></i>
                </div>
                <h3 class="card-title">Data Engineering</h3>
                <p class="card-description">Building robust data pipelines, ETL processes, and real-time streaming solutions using Apache Spark, Kafka, and modern cloud platforms.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-server"></i>
                </div>
                <h3 class="card-title">Backend Development</h3>
                <p class="card-description">Designing and implementing scalable backend systems, microservices architecture, and RESTful APIs with a focus on performance and reliability.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-cloud"></i>
                </div>
                <h3 class="card-title">Cloud Architecture</h3>
                <p class="card-description">Architecting cloud-native solutions on AWS, Azure, and GCP with expertise in containerization, orchestration, and infrastructure as code.</p>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="section-container">
        <h2 class="section-title">Latest Blog Posts</h2>
        <div class="post-grid">
            {% for post in site.posts limit:3 %}
            <article class="post-card">
                <div class="post-content">
                    <div class="post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
                    <h3 class="post-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h3>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                    <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
                </div>
            </article>
            {% endfor %}
        </div>
        <div style="text-align: center; margin-top: 2rem;">
            <a href="/blog" class="btn btn-primary">View All Posts</a>
        </div>
    </div>
</section>