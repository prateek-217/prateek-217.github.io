---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
    <div class="section-container">
        <h1 class="section-title">Tech Blog</h1>
        <p class="section-subtitle">Sharing insights on data engineering, backend development, and cloud architecture</p>
        
        <div class="post-grid">
            {% for post in site.posts %}
            <article class="post-card">
                <div class="post-content">
                    <div class="post-meta">
                        {{ post.date | date: "%B %d, %Y" }}
                        {% if post.tags.size > 0 %}
                        <div style="margin-top: 0.5rem;">
                            {% for tag in post.tags %}
                            <span style="background: var(--accent-color); color: white; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem; margin-right: 0.5rem;">{{ tag }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                    </div>
                    <h2 class="post-title">
                        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                    </h2>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
                    <a href="{{ post.url | relative_url }}" class="read-more">Read Full Article →</a>
                </div>
            </article>
            {% endfor %}
        </div>
        
        {% if site.posts.size == 0 %}
        <div style="text-align: center; padding: 4rem 2rem; color: var(--text-secondary);">
            <i class="fas fa-pen-nib" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-light);"></i>
            <h3>Coming Soon</h3>
            <p>I'm working on some exciting tech blog posts. Check back soon!</p>
        </div>
        {% endif %}
    </div>
</section>