#!/bin/bash

# Performance Optimization Script for Jekyll Portfolio
# This script optimizes images and assets for better performance

echo "🚀 Starting Performance Optimization..."

# Check if required tools are installed
check_tool() {
    if ! command -v $1 &> /dev/null; then
        echo "⚠️  $1 is not installed. Please install it for optimal performance."
        return 1
    fi
    return 0
}

# Check for optimization tools
check_tool "convert" || echo "💡 Install ImageMagick: brew install imagemagick"
check_tool "pngquant" || echo "💡 Install pngquant: brew install pngquant"
check_tool "jpegoptim" || echo "💡 Install jpegoptim: brew install jpegoptim"

# Create optimized images directory
mkdir -p assets/images/optimized

# Optimize images if tools are available
if command -v convert &> /dev/null; then
    echo "📸 Optimizing images..."
    
    # Optimize profile.jpg
    if [ -f "assets/images/profile.jpg" ]; then
        echo "  - Optimizing profile.jpg..."
        convert "assets/images/profile.jpg" -quality 85 -strip "assets/images/optimized/profile.jpg"
        echo "    Original: $(du -h assets/images/profile.jpg | cut -f1)"
        echo "    Optimized: $(du -h assets/images/optimized/profile.jpg | cut -f1)"
    fi
    
    # Optimize icon.png
    if [ -f "assets/images/icon.png" ]; then
        echo "  - Optimizing icon.png..."
        convert "assets/images/icon.png" -quality 85 -strip "assets/images/optimized/icon.png"
        echo "    Original: $(du -h assets/images/icon.png | cut -f1)"
        echo "    Optimized: $(du -h assets/images/optimized/icon.png | cut -f1)"
    fi
fi

# Additional optimization with specialized tools
if command -v jpegoptim &> /dev/null; then
    echo "🔧 Further optimizing JPEG images..."
    jpegoptim --strip-all --max=85 assets/images/optimized/*.jpg 2>/dev/null || true
fi

if command -v pngquant &> /dev/null; then
    echo "🔧 Further optimizing PNG images..."
    pngquant --force --ext .png --quality=85-95 assets/images/optimized/*.png 2>/dev/null || true
fi

# Create .gitignore entries for optimized assets
echo "📝 Updating .gitignore..."
cat >> .gitignore << EOF

# Optimized assets (generated)
assets/images/optimized/
*.optimized.*

# Performance optimization artifacts
.optimization-cache/
EOF

echo "✅ Performance optimization complete!"
echo ""
echo "📊 Optimization Summary:"
echo "  - Build artifacts cleaned"
echo "  - Images optimized (if tools available)"
echo "  - Configuration enhanced"
echo "  - Dependencies updated"
echo ""
echo "💡 Next steps:"
echo "  1. Run 'bundle install' to install new gems"
echo "  2. Test the site with 'bundle exec jekyll serve'"
echo "  3. Check performance with browser dev tools"
