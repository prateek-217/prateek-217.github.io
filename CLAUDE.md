# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based developer portfolio website for Prateek Rajput, featuring a modern futuristic design with advanced CSS animations, particle effects, and glassmorphism. The site is configured for deployment on GitHub Pages with custom domain support (prateek-rajput.com).

## Development Server Management

Use the custom `dev-server.sh` script for all server operations:

```bash
./dev-server.sh start     # Start Jekyll development server
./dev-server.sh restart   # Full restart with cache cleanup
./dev-server.sh stop      # Stop the server
./dev-server.sh clean     # Clean Jekyll cache and build files
./dev-server.sh status    # Check server status
./dev-server.sh logs      # View live server logs
```

**Important**: The script prevents infinite reload loops by excluding log files from Jekyll's watch system and using temporary log files in `/tmp/`.

## Jekyll Configuration

- **Server runs on**: `http://localhost:4000`
- **LiveReload port**: `35729`
- **Custom domain**: `prateek-rajput.com` (configured via CNAME)
- **Jekyll version**: 4.3.x
- **Ruby gems**: Run `bundle install` to install dependencies

### Key Plugins
- `jekyll-feed` - RSS feed generation
- `jekyll-sitemap` - XML sitemap
- `jekyll-seo-tag` - SEO meta tags

### Excluded Files
The `_config.yml` excludes development files from Jekyll processing:
- Log files (`*.log`, `jekyll.log`)
- Development scripts (`dev-server.sh`)
- System files (`.DS_Store`, cache directories)

## Architecture & Design System

### Theme Architecture
The site implements a **dark futuristic theme** with:

- **CSS Custom Properties**: Centralized design tokens in `:root` for colors, shadows, gradients, and transitions
- **Glassmorphism Effects**: Backdrop-filter and translucent backgrounds
- **Neon Color Palette**: Primary cyan (#00d4ff), purple accents, and gradient combinations
- **Advanced Animations**: CSS keyframes with cubic-bezier easing functions

### Layout Structure
- **Single Layout**: `_layouts/default.html` serves all pages
- **Component-based Navigation**: Fixed glassmorphic navbar with mobile hamburger menu
- **Responsive Grid System**: CSS Grid and Flexbox for card layouts
- **Semantic Structure**: Header nav, main content, footer with social links

### JavaScript Architecture
The `assets/js/main.js` uses ES6 classes for modular functionality:

- **ParticleSystem**: Canvas-based animated background particles
- **ScrollAnimations**: Intersection Observer for fade-in effects
- **NavbarEffects**: Dynamic navbar behavior on scroll
- **InteractiveElements**: 3D card tilt effects and button ripples
- **CursorEffects**: Custom cursor with hover scaling
- **MobileNavigation**: Hamburger menu with animation states

### CSS Organization
The `assets/css/main.css` is structured as:

1. **CSS Custom Properties** - Design tokens and variables
2. **Reset & Base Styles** - Normalize and typography
3. **Animated Background** - Dual-layer gradient system with keyframes
4. **Component Styles** - Navigation, cards, buttons, footer
5. **Interactive Effects** - Hover states, transforms, shadows
6. **Responsive Design** - Mobile-first breakpoints
7. **Utility Classes** - Reusable styling patterns

## Content Structure

### Page Types
- **Homepage** (`index.md`): Hero section with profile, services cards, latest blog posts
- **Experience** (`experience.md`): Professional background and skills
- **Projects** (`project.md`): Portfolio showcase
- **Blog** (`blog.md`): Tech blog listing with Jekyll posts
- **Contact** (`contact.md`): Contact form and information

### Blog Posts
Located in `_posts/` with Jekyll naming convention: `YYYY-MM-DD-title.md`
- Front matter: `layout: post`, `title`, `date`, `categories`
- Markdown content with syntax highlighting support

## Styling Guidelines

### Color System
- **Primary**: `--primary-color` (#00d4ff) for key elements
- **Secondary**: `--secondary-color` (#7c3aed) for accents
- **Background**: `--bg-primary` (#0a0e1a) dark theme base
- **Text**: `--text-primary` (white) and `--text-secondary` (muted)

### Animation Patterns
- **Transitions**: Use CSS custom properties (`--transition`, `--transition-fast`, `--transition-slow`)
- **Transforms**: Prefer `translate3d()` and `scale()` for GPU acceleration
- **Keyframes**: Suffix animation names with purpose (`backgroundShift`, `heroGlow`)

### Interactive Elements
- **Hover Effects**: Subtle scale transforms (1.05x) with shadow changes
- **Focus States**: 2px solid outline with offset for accessibility
- **Loading States**: Pulse animation for async content

## Common Development Tasks

### Adding New Pages
1. Create `.md` file in root with Jekyll front matter
2. Use `layout: default` to inherit the main layout
3. Add navigation link in `_layouts/default.html` if needed

### Modifying Animations
- Update CSS custom properties in `:root` for global changes
- Keyframe animations are defined after component styles
- Test performance impact with browser DevTools

### Updating Colors/Theming
- Modify CSS custom properties in `assets/css/main.css`
- Maintain contrast ratios for accessibility
- Test both light and dark appearance modes

## Build & Deployment

### Local Development
```bash
bundle install          # Install Ruby dependencies
./dev-server.sh start   # Start development server
```

### GitHub Pages Deployment
The site auto-deploys via GitHub Pages when pushed to the main branch:
- Custom domain configured via `CNAME` file
- Jekyll builds automatically in GitHub's environment
- SEO tags and sitemap generate during build

### Performance Considerations
- **Particle System**: Automatically scales particle count based on screen width
- **Image Optimization**: Profile images use GitHub avatar fallback
- **CSS**: Single stylesheet with efficient selectors
- **JavaScript**: Modular loading with error handling

## Troubleshooting

### Infinite Reload Issues
If pages continuously reload:
1. Check Jekyll logs with `./dev-server.sh logs`
2. Ensure log files are excluded in `_config.yml`
3. Restart with `./dev-server.sh restart` to clean cache

### Layout/Styling Issues
- Verify CSS custom properties are properly defined
- Check browser developer tools for CSS parsing errors
- Test responsive breakpoints at 768px mobile threshold

### Build Failures
- Run `bundle install` to update dependencies
- Check Jekyll version compatibility in `Gemfile`
- Ensure all layout references use `layout: default`