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
        <p class="hero-subtitle">Senior Data Engineer & Backend Leader with 8+ years of experience building scalable systems for media and e-commerce platforms.</p>
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
                <p class="card-description">Built high-performance data pipelines processing 13TB daily, reducing processing time from 24 hours to 4.5 hours. Expert in Apache Spark, Kafka, Hadoop, and scaling systems from 10K to 22K events/sec.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <h3 class="card-title">Recommendation Systems</h3>
                <p class="card-description">Designed and migrated recommendation engines from Hadoop to Spark for e-commerce platforms. Developed "HawkEye" computation layer to drastically reduce HDFS read times and improve user experience.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <h3 class="card-title">AI & LLM Solutions</h3>
                <p class="card-description">Built AI-powered chatbots using Azure OpenAI Studio and Langchain for media content analysis. Integrated advanced summarization and translation capabilities for daily articles using LLMs.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-server"></i>
                </div>
                <h3 class="card-title">Backend Development</h3>
                <p class="card-description">Architect scalable backend systems using Python Flask, Java, and Scala. Built RESTful APIs and migrated legacy systems to modern cloud-native solutions with focus on reliability.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-cloud"></i>
                </div>
                <h3 class="card-title">Cloud Architecture</h3>
                <p class="card-description">Deploy solutions on Azure and GCP with Docker, Kubernetes, and custom Spark environments. Established cost-effective alternatives to Databricks while optimizing system efficiency.</p>
            </div>
            
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3 class="card-title">Technical Leadership</h3>
                <p class="card-description">Currently Senior Manager at Mediacorp Singapore, leading platform modernizations and mentoring teams. Authored design documents and drove NFR planning for major sales events at Flipkart.</p>
            </div>
        </div>
        
        <div style="margin-top: 3rem; text-align: center;">
            <div style="display: inline-flex; align-items: center; gap: 2rem; padding: 1rem 2rem; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 0.75rem; flex-wrap: wrap; justify-content: center;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
                    <i class="fas fa-trophy" style="color: var(--primary-color);"></i>
                    <span><strong>Hackathon Winner</strong> & Multiple Awards</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
                    <i class="fas fa-graduation-cap" style="color: var(--primary-color);"></i>
                    <span>Top <strong>1%</strong> in National MCA Rankings</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary);">
                    <i class="fas fa-map-marker-alt" style="color: var(--primary-color);"></i>
                    <span>Based in <strong>Singapore</strong> (Employment Pass)</span>
                </div>
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